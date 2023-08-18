import * as yup from 'yup';

export const profileValidationSchema = yup.object().shape({
  specialization: yup.string().nullable(),
  experience: yup.string().nullable(),
  availability: yup.string().nullable(),
  user_id: yup.string().nullable(),
});
