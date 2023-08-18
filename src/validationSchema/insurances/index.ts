import * as yup from 'yup';

export const insuranceValidationSchema = yup.object().shape({
  provider_name: yup.string().required(),
  policy_number: yup.string().required(),
  coverage_details: yup.string().required(),
  user_id: yup.string().nullable(),
  organization_id: yup.string().nullable(),
});
