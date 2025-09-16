import React, { useEffect, useState } from 'react'
import Swal from 'sweetalert2'
import { useForm } from 'react-hook-form'

import { postAdminLogin } from 'api/login/post'
import { useNavigate } from 'react-router-dom'
import { Container } from './style'

type FormInputs = {
  email: string
  senha: string
}

export default function ModalLogin() {
  const navigate = useNavigate()
  const [submitted, setSubmitted] = useState(false)

  const {
    register,
    handleSubmit,
    setError,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormInputs>()

  const onSubmit = async (data: FormInputs) => {
    try {
      await postAdminLogin({ email: data.email, password: data.senha })

      setSubmitted(true)
      navigate(`/admin/events`)
    } catch (error: any) {
      console.error('Erro ao enviar a solicitação POST:', error)
      const err = error?.response?.data?.error

      if (err?.code === 401) {
        // Erro relacionado ao login (ex: senha incorreta)
        setError('senha', {
          type: 'manual',
          message: 'E-mail ou senha incorretos. Tente novamente <3.',
        })
      } else {
        // Outros erros
        Swal.fire({
          title: err?.title || 'Erro',
          text: err?.message || 'Algo deu errado. Tente novamente <3.',
          confirmButtonText: 'OK',
        })
      }
    }
  }

  useEffect(() => {
    if (submitted) {
      reset() // Limpa os campos após login bem-sucedido
    }
  }, [submitted, reset])

  return (
    <Container>
      <div className='main-div'>
        <div className='modal'>
          <form className='modal-form' onSubmit={handleSubmit(onSubmit)}>
            <h1>LOGIN</h1>
            <div id='itens' className='modal'>
              <h2 className='modal-text'>E-mail</h2>
              <input
                className={` modal-input ${errors.email ? 'error' : ''}`}
                type='text'
                placeholder='Entre com seu e-mail'
                {...register('email', {
                  required: 'Esse campo é obrigatório.',
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: 'Formato de e-mail inválido.',
                  },
                })}
              />
              {errors.email && (
                <p className='error-message'>{errors.email.message}</p>
              )}

              <h2 className='modal-text'>Senha</h2>
              <input
                className={` modal-input ${errors.senha ? 'error' : ''}`}
                type='password'
                placeholder='Entre com sua senha'
                {...register('senha', {
                  required: 'Esse campo é obrigatório.',
                  minLength: {
                    value: 6,
                    message: 'A senha deve ter no mínimo 6 caracteres.',
                  },
                })}
              />
              {errors.senha && (
                <p className='error-message'>{errors.senha.message}</p>
              )}
            </div>

            <button className='modal-btn' type='submit' disabled={isSubmitting}>
              {isSubmitting ? 'Entrando...' : 'Log In'}
            </button>
          </form>

          <p className='modal-p'>WIT - ICMC/USP 2025</p>
        </div>
      </div>
    </Container>
  )
}
