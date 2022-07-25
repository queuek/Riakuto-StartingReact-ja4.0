import * as yup from 'yup';
import { genderCode } from './constants';
import type { InferType } from 'yup';

const regFormSchema = yup.object({
  username: yup.string().required('必須項目です'),
  zipcode: yup.string().max(7).matches(/\d{7}/, '7桁の数字で入力してください'),
  gender: yup.mixed().oneOf(Object.keys(genderCode)),
  isAgreed: yup.boolean().oneOf([true], '同意が必要です').required(),
});

type RegFormSchema = InferType<typeof regFormSchema>;

export { regFormSchema };
export type { RegFormSchema };
