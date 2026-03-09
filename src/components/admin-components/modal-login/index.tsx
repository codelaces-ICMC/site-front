import { postAdminLogin } from 'api/login/post'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
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
      await Swal.fire({
        title: 'Login realizado',
        text: 'Credenciais validadas com sucesso.',
        icon: 'success',
        confirmButtonText: 'OK',
      })
      navigate('/admin/events')
    } catch (error: any) {
      console.error('Erro ao enviar a solicitacao POST:', error)
      const err = error?.response?.data?.error

      if (err?.code === 401) {
        setError('senha', {
          type: 'manual',
          message: 'E-mail ou senha incorretos. Tente novamente <3.',
        })
      } else {
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
      reset()
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
                  required: 'Esse campo e obrigatorio.',
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: 'Formato de e-mail invalido.',
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
                  required: 'Esse campo e obrigatorio.',
                  minLength: {
                    value: 6,
                    message: 'A senha deve ter no minimo 6 caracteres.',
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
