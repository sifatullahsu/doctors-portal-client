import React from 'react';
import { useLoaderData } from 'react-router-dom';
import DoctorForm from '../../components/Dashboard/DoctorForm';

const EditDoctor = () => {
  const doctor = useLoaderData();

  return (
    <DoctorForm data={doctor}></DoctorForm>
  );
};

export default EditDoctor;