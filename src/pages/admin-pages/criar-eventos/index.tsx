import React, { useState } from 'react'
import GlobalStyles from '../../../styles/GlobalStyles'

import MyButton from '../../../components/admin-components/btn'

import iconFinish from '../../../assets/img/icons/icon-finish.png'
import iconReturn from '../../../assets/img/icons/icon-return.png'

import { postAdminEvents } from 'api/admin/events/post'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import { Container } from './style'
import { useForm } from 'react-hook-form';

interface FormValues {
  nomeEvento: string
  inicio: string
  fim: string
  descricao: string
  banner: File | null
  valor: number
  linkPagamento: string
  linkDrive: string
  lugar: string
}

const EventosAdmin: React.FC = () => {
  const navigate = useNavigate()

  const [formValues, setFormValues] = useState<FormValues>({
    nomeEvento: '',
    inicio: '',
    fim: '',
    descricao: '',
    banner: null,
    valor: 0,
    linkPagamento: '',
    linkDrive: '',
    lugar: '',
  })

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target
    setFormValues({ ...formValues, [name]: value })
  }

  // Função para formatação de data
  const handleDateInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let { value } = e.target;

    // Remove qualquer caractere que não seja dígito
    value = value.replace(/\D/g, "");

    // Formata a data no formato DD/MM/AA XX:XX
    if (value.length> 2) value = value.slice(0, 2) + "/" + value.slice(2);
    if (value.length > 5) value = value.slice(0, 5) + "/" + value.slice(5);
    if (value.length > 8) value = value.slice(0, 8) + " " + value.slice(8);
    if (value.length > 11) value = value.slice(0, 11) + ":" + value.slice(11);

    // Limita o tamanho máximo
    if (value.length > 14) value = value.slice(0, 14);

    // Atualiza o valor do input
    e.target.value = value;
  }

  // const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const { name, files } = e.target
  //   if (files && files.length > 0) {
  //     setFormValues({ ...formValues, [name]: files[0] })
  //   }
  // }

  const handleSubmission = async (event: React.FormEvent) => {
    event.preventDefault() // Evita o comportamento padrão de envio de formulário
    try {
      await postAdminEvents({
        eventName: formValues.nomeEvento,
        startDate: formValues.inicio,
        endDate: formValues.fim,
        description: formValues.descricao,
        cover: '',
        coffeeValue: formValues.valor,
        coffeePaymentLink: formValues.linkPagamento,
        driveGalleryLink: formValues.linkDrive,
      })

      navigate(`/admin/events`)
    } catch (error: any) {
      console.error('Erro ao enviar a solicitação POST:', error)
      const err = error?.response?.data?.error

      if (err) {
        Swal.fire({
          title: err?.title || "Erro",
          text: err?.message || "Algo deu errado. Tente novamente <3.",
          confirmButtonText: "OK",
        })
      }
      navigate('/admin/login')
    }
  };

  const {
    register,
    handleSubmit,
    setError,
    reset,
    formState: { errors, isSubmitting }
  } = useForm<FormValues>();

  return (
    <Container>
      <GlobalStyles />
      <div className='header'>
        <a href='/admin/events'>
          <MyButton text='Eventos' img_path={iconReturn} />
        </a>
        <div className='logo'>
          <a href='/'>
            <h1>
              W<span>i</span>T
            </h1>
          </a>
        </div>
      </div>
      <div className='forms-event'>
        <form onSubmit={handleSubmission}>
          <label id='label-nome' className='label-event'>
            Nome do evento:
            <input
              type="text"
              placeholder="Nome do evento"
              className={errors.nomeEvento ? "input-error" : ""}
              {...register("nomeEvento", {
                required: "Esse campo é obrigatório.",
                minLength: {
                  value: 3,
                  message: "O nome do evento deve ter pelo menos 3 caracteres.",
                },
              })}
            />

            {errors.nomeEvento && <span className="error-message">{errors.nomeEvento.message}</span>}
          </label>

          <div className="linha-data">
            <label id="label-inicio" className="label-event">
              Inicio:
              <input
                type="text"
                placeholder="DD/MM/AA XX:XX"
                className={errors.inicio ? "input-error" : ""}
                {...register("inicio", {
                  required: "Esse campo é obrigatório.",
                  pattern: {
                    value: /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{2} \d{2}:\d{2}$/,
                    message: "Formato inválido. Use DD/MM/AA HH:MM",
                  },
                })}
                onChange={(e) => {
                  handleDateInputChange(e);
                }}
              />
              {errors.inicio && <span className="error-message">{errors.inicio.message}</span>}
            </label>

            <label id="label-fim" className="label-event">
              Fim:
              <input
                type="text"
                placeholder="DD/MM/AA XX:XX"
                className={errors.fim ? "input-error" : ""}
                {...register("fim", {
                  required: "Esse campo é obrigatório.",
                  pattern: {
                    value: /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{2} \d{2}:\d{2}$/,
                    message: "Formato inválido. Use DD/MM/AA HH:MM",
                  },
                })}
                onChange={(e) => {
                  handleDateInputChange(e);
                }}
              />
              {errors.fim && <span className="error-message">{errors.fim.message}</span>}
            </label>

          </div>
          <label id='label-descricao' className='label-event'>
            Descrição:
            <textarea
              rows={1}
              cols={50}
              name='descricao'
              value={formValues.descricao}
              onChange={handleInputChange}
              placeholder="Descrição do evento"
              onInput={(e) => {
                if (e.target instanceof HTMLElement) {
                  e.target.style.height = 'auto' // Redefine a altura para automática
                  e.target.style.height = `${e.target.scrollHeight}px` // Ajusta a altura conforme o conteúdo
                } // Ajusta a altura conforme o conteúdo
              }}
            />
          </label>
          <label id='label-lugar' className='label-event'>
            Local:
            <input
              type='text'
              name='lugar'
              value={formValues.lugar}
              onChange={handleInputChange}
              placeholder="Local do evento"
            />
          </label>
          {/* <label id="label-banner" className="label-event">
            Banner:
            <input
              id="input-banner"
              type="file"
              accept="image/*"
              name="banner"
              onChange={handleFileChange}
            />
          </label> */}
          <h2 className='title-section'>Coffee</h2>
          <div className='segunda-linha'>
            <label id='label-valor' className='label-event'>
              Valor:
              <input
                type="text"
                placeholder="XX.XX"
                {...register("valor", {
                  required: "Esse campo é obrigatório.",
                  pattern: {
                    value: /^\d+(\.\d{1,2})?$/,
                    message: "Formato inválido. Use XX.XX",
                  },
                })}
              />
            </label>
            <label id='label-link' className='label-event'>
              Link do pagamento:
              <input
                type='text'
                name='linkPagamento'
                onChange={handleInputChange}
                placeholder="Link para o pagamento"
              />
            </label>
          </div>
          <h2 className='title-section'>Fotos</h2>
          <label id='label-drive' className='label-event'>
            Link do Drive:
            <input 
            type="text" 
            name="linkDrive" 
            onChange={handleInputChange} />
          </label>
          <button type='submit' className='btn-finish'>
            <MyButton text='Finalizar' img_path={iconFinish} />
          </button>
        </form>
      </div>
    </Container>
  )
}

export default EventosAdmin
