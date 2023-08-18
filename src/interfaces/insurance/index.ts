import { UserInterface } from 'interfaces/user';
import { OrganizationInterface } from 'interfaces/organization';
import { GetQueryInterface } from 'interfaces';

export interface InsuranceInterface {
  id?: string;
  provider_name: string;
  policy_number: string;
  coverage_details: string;
  user_id?: string;
  organization_id?: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  organization?: OrganizationInterface;
  _count?: {};
}

export interface InsuranceGetQueryInterface extends GetQueryInterface {
  id?: string;
  provider_name?: string;
  policy_number?: string;
  coverage_details?: string;
  user_id?: string;
  organization_id?: string;
}
