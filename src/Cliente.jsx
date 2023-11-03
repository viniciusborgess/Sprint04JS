import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

function Cliente() {
  const schema = yup.object({
    nome: yup.string().required('Campo nome Obrigatório'),
    email: yup.string().email('Digite um email Válido').required('Campo email obrigatório'),
    cpf: yup.string().min(11, 'CPF deve conter 11 dígitos').required('Campo cpf Obrigatório'),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    setFocus,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const [listaClientes, setListaClientes] = useState([]);

  function inserirClientes(cliente) {
    setListaClientes([...listaClientes, cliente]);
  }

  function buscarCep(e) {
    const cep = e.target.value.replace(/\D/g, '');
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
      .then((res) => res.json())
      .then((data) => {
        setValue('rua', data.logradouro);
        setValue('bairro', data.bairro);
        setValue('estado', data.uf);
        setValue('cidade', data.localidade);
        setFocus('numero');
      });
  }

  return (
    <>
    <div className="d-flex justify-content-center align-items-center" >
      <form onSubmit={handleSubmit(inserirClientes)} className="my-4">
  <div className="row g-5">
    <div className="col-md-6">
      <fieldset>
        <legend className="mb-3">Dados Pessoais</legend>
        <div className="mb-3">
          <label className="form-label">
            Nome:
            <input type="text" className="form-control" {...register('nome')} />
            <span className="text-danger">{errors.nome?.message}</span>
          </label>
        </div>
        <div className="mb-3">
          <label className="form-label">
            Email:
            <input type="text" className="form-control" {...register('email')} />
            <span className="text-danger">{errors.email?.message}</span>
          </label>
        </div>
        <div className="mb-3">
          <label className="form-label">
            CPF:
            <input type="text" className="form-control" {...register('cpf')} />
            <span className="text-danger">{errors.cpf?.message}</span>
          </label>
        </div>
        <div className="mb-3">
          <label className="form-label">
            CEP:
            <input type="text" className="form-control" {...register('cep')} onBlur={buscarCep} />
          </label>
        </div>
      </fieldset>
    </div>
    <div className="col-md-6">
      <fieldset>
        <legend className="mb-3">Dados Endereço</legend>
        <div className="mb-3">
          <label className="form-label">
            Rua:
            <input type="text" className="form-control" {...register('rua')} />
          </label>
        </div>
        <div className="mb-3">
          <label className="form-label">
            Numero:
            <input type="text" className="form-control" {...register('numero')} />
          </label>
        </div>
        <div className="mb-3">
          <label className="form-label">
            Bairro:
            <input type="text" className="form-control" {...register('bairro')} />
          </label>
        </div>
        <div className="mb-3">
          <label className="form-label">
            Cidade:
            <input type="text" className="form-control" {...register('cidade')} />
          </label>
        </div>
      </fieldset>
    </div>
  </div>
  <button type="submit" className="btn btn-primary">Cadastrar</button>
  <button type="reset" className="btn btn-secondary ms-2">Reset</button>
</form>
</div>


    </>
  );
}

export default Cliente;
