import React from 'react'
// import GlobalStyles from '../../../styles/GlobalStyles'

// import MyButton from '../../../components/admin-components/btn'

// import iconFinish from '../../../assets/img/icons/icon-finish.png'
// import iconReturn from '../../../assets/img/icons/icon-return.png'

// import { postAdminEvents } from 'api/admin/events/post'
// import { useNavigate } from 'react-router-dom'
// import Swal from 'sweetalert2'
// import { Container } from './style'
// // import { useForm } from 'react-hook-form'

// type FormValues = {
//   nomeEvento: string
//   inicio: string
//   fim: string
//   descricao: string
//   banner: File | null
//   valor: number
//   linkPagamento: string
//   linkDrive: string
//   lugar: string
// }

// const EventosAdmin: React.FC = () => {
//   const navigate = useNavigate()

//   // const handleInputChange = (
//   //   e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
//   // ) => {
//   //   const { name, value } = e.target
//   //   setFormValues({ ...formValues, [name]: value })
//   // }

//   // Função para formatação de data
//   const handleDateInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     let { value } = e.target

//     // Remove qualquer caractere que não seja dígito
//     value = value.replace(/\D/g, '')

//     // Formata a data no formato DD/MM/AA XX:XX
//     if (value.length > 2) value = value.slice(0, 2) + '/' + value.slice(2)
//     if (value.length > 5) value = value.slice(0, 5) + '/' + value.slice(5)
//     if (value.length > 8) value = value.slice(0, 8) + ' ' + value.slice(8)
//     if (value.length > 11) value = value.slice(0, 11) + ':' + value.slice(11)

//     // Limita o tamanho máximo
//     if (value.length > 14) value = value.slice(0, 14)

//     // Atualiza o valor do input
//     e.target.value = value
//   }

//   // const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//   //   const { name, files } = e.target
//   //   if (files && files.length > 0) {
//   //     setFormValues({ ...formValues, [name]: files[0] })
//   //   }
//   // }

//   const handleSubmission = async (data: FormValues) => {
//     // event.preventDefault() // Evita o comportamento padrão de envio de formulário
//     try {
//       await postAdminEvents({
//         eventName: data.nomeEvento,
//         startDate: data.inicio,
//         endDate: data.fim,
//         description: data.descricao,
//         cover: '',
//         coffeeValue: data.valor,
//         coffeePaymentLink: data.linkPagamento,
//         driveGalleryLink: data.linkDrive,
//       })

//       navigate(`/admin/events`)
//     } catch (error: any) {
//       console.error('Erro ao enviar a solicitação POST:', error)
//       const err = error?.response?.data?.error

//       if (err) {
//         Swal.fire({
//           title: err?.title || 'Erro',
//           text: err?.message || 'Algo deu errado. Tente novamente <3.',
//           confirmButtonText: 'OK',
//         })
//       }
//       navigate('/admin/events')
//     }
//   }

//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm<FormValues>()

//   return (
//     <Container>
//       <GlobalStyles />
//       <div className='header'>
//         <a href='/admin/events'>
//           <MyButton text='Eventos' img_path={iconReturn} />
//         </a>
//         <div className='logo'>
//           <a href='/'>
//             <h1>
//               W<span>i</span>T
//             </h1>
//           </a>
//         </div>
//       </div>
//       <div className='forms-event'>
//         <form onSubmit={handleSubmit(handleSubmission)}>
//           <label id='label-nome' className='label-event'>
//             Nome do evento:
//             <input
//               type='text'
//               placeholder='Nome do evento'
//               className={errors.nomeEvento ? 'input-error' : ''}
//               {...register('nomeEvento', {
//                 required: 'Esse campo é obrigatório.',
//                 minLength: {
//                   value: 3,
//                   message: 'O nome do evento deve ter pelo menos 3 caracteres.',
//                 },
//                 maxLength: {
//                   value: 60,
//                   message: 'O nome do evento deve ter no máximo 60 caracteres.',
//                 },
//               })}
//             />
//             {errors.nomeEvento && (
//               <span className='error-message'>{errors.nomeEvento.message}</span>
//             )}
//           </label>

//           <div className='linha-data'>
//             <label id='label-inicio' className='label-event'>
//               Inicio:
//               <input
//                 type='text'
//                 placeholder='DD/MM/AA XX:XX'
//                 className={errors.inicio ? 'input-error' : ''}
//                 required
//                 {...register('inicio', {
//                   required: 'Esse campo é obrigatório.',
//                   pattern: {
//                     value:
//                       /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{2} \d{2}:\d{2}$/,
//                     message: 'Formato inválido. Use DD/MM/AA HH:MM',
//                   },
//                 })}
//                 onChange={e => {
//                   handleDateInputChange(e)
//                 }}
//               />
//               {errors.inicio && (
//                 <span className='error-message'>{errors.inicio.message}</span>
//               )}
//             </label>

//             <label id='label-fim' className='label-event'>
//               Fim:
//               <input
//                 type='text'
//                 placeholder='DD/MM/AA XX:XX'
//                 className={errors.fim ? 'error' : ''}
//                 required
//                 {...register('fim', {
//                   required: 'Esse campo é obrigatório.',
//                   pattern: {
//                     value:
//                       /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{2} \d{2}:\d{2}$/,
//                     message: 'Formato inválido. Use DD/MM/AA HH:MM',
//                   },
//                   validate: (value, formValues) => {
//                     // Separando dia e hora
//                     const parseDate = (str: string) => {
//                       const [date, time] = str.split(' ')
//                       if (!date || !time) return null

//                       // Separando dia, mês e ano. Hora e minuto
//                       const [day, month, year] = date.split('/')
//                       const [hour, minute] = time.split(':')

//                       return new Date(
//                         2000 + parseInt(year, 10),
//                         parseInt(month, 10) - 1,
//                         parseInt(day, 10),
//                         parseInt(hour, 10),
//                         parseInt(minute, 10),
//                       )
//                     }
//                     // Verificando se a data de início é menor que a data de fim
//                     const inicioDate = parseDate(formValues.inicio)
//                     const fimDate = parseDate(value)
//                     if (!inicioDate || !fimDate) return true // Caso o formato esteja errado, não valida
//                     return (
//                       inicioDate < fimDate ||
//                       'A data de fim deve ser após a data de início.'
//                     )
//                   },
//                 })}
//                 onChange={e => {
//                   handleDateInputChange(e)
//                 }}
//               />
//               {errors.fim && (
//                 <span className='error-message'>{errors.fim.message}</span>
//               )}
//             </label>
//           </div>
//           <label id='label-descricao' className='label-event'>
//             Descrição:
//             <textarea
//               rows={1}
//               cols={50}
//               placeholder='Descrição do evento'
//               className={errors.descricao ? 'input-error' : ''}
//               {...register('descricao', {
//                 minLength: {
//                   value: 10,
//                   message: 'A descrição deve ter pelo menos 10 caracteres.',
//                 },
//               })}
//               onInput={e => {
//                 if (e.target instanceof HTMLElement) {
//                   e.target.style.height = 'auto' // Redefine a altura para automática
//                   e.target.style.height = `${e.target.scrollHeight}px` // Ajusta a altura conforme o conteúdo
//                 } // Ajusta a altura conforme o conteúdo
//               }}
//             />
//             {errors.descricao && (
//               <span className='error-message'>{errors.descricao.message}</span>
//             )}
//           </label>

//           <label id='label-lugar' className='label-event'>
//             Local:
//             <input
//               type='text'
//               placeholder='Local do evento'
//               className={errors.lugar ? 'input-error' : ''}
//               {...register('lugar', {
//                 required: 'Esse campo é obrigatório.',
//                 minLength: {
//                   value: 3,
//                   message: 'O nome do local deve ter pelo menos 3 caracteres.',
//                 },
//                 maxLength: {
//                   value: 60,
//                   message: 'O nome do local deve ter no máximo 60 caracteres.',
//                 },
//               })}
//             />
//             {errors.lugar && (
//               <span className='error-message'>{errors.lugar.message}</span>
//             )}
//           </label>

//           {/* <label id="label-banner" className="label-event">
//             Banner:
//             <input
//               id="input-banner"
//               type="file"
//               accept="image/*"
//               name="banner"
//               onChange={handleFileChange}
//             />
//           </label> */}

//           <h2 className='title-section'>Coffee</h2>
//           <div className='segunda-linha'>
//             <label id='label-valor' className='label-event'>
//               Valor:
//               <input
//                 type='text'
//                 placeholder='XX.XX'
//                 inputMode='numeric'
//                 pattern='\d*'
//                 {...register('valor', {
//                   pattern: {
//                     value: /^\d+(\.\d{1,2})?$/,
//                     message: 'Formato inválido. Use XX.XX',
//                   },
//                 })}
//                 onChange={e => {
//                   // Permitir apenas números e ponto
//                   let value = e.target.value.replace(/[^0-9.]/g, '')
//                   // Se houver mais de um ponto, manter apenas o primeiro
//                   value = value.replace(/(\..*)\./g, '$1')
//                   e.target.value = value
//                 }}
//               />
//             </label>

//             <label id='label-link' className='label-event'>
//               Link do pagamento:
//               <input
//                 type='text'
//                 placeholder='Link para o pagamento'
//                 className={errors.linkPagamento ? 'input-error' : ''}
//                 {...register('linkPagamento', {
//                   pattern: {
//                     value: /^(https?:\/\/[^\s$.?#].[^\s]*)$/,
//                     message: 'Formato de URL inválido.',
//                   },
//                 })}
//               />
//               {errors.linkPagamento && (
//                 <span className='error-message'>
//                   {errors.linkPagamento.message}
//                 </span>
//               )}
//             </label>
//           </div>
//           <h2 className='title-section'>Fotos</h2>
//           <label id='label-drive' className='label-event'>
//             Link do Drive:
//             <input
//               type='text'
//               {...register('linkDrive', {
//                 pattern: {
//                   value: /^(https?:\/\/[^\s$.?#].[^\s]*)$/,
//                   message: 'Formato de URL inválido.',
//                 },
//               })}
//             />
//             {errors.linkDrive && (
//               <span className='error-message'>{errors.linkDrive.message}</span>
//             )}
//           </label>
//           <button type='submit' className='btn-finish'>
//             <MyButton text='Finalizar' img_path={iconFinish} />
//           </button>
//         </form>
//       </div>
//     </Container>
//   )
// }

// export default EventosAdmin
