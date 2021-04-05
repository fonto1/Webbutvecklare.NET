export interface issueInterface {
  from: number;
  to: number[];
  status: boolean;
  title: string;
  manager: string;
  comments: [];
  id: number;
  question: string;
  date: string;
  answer: string;
  deadline: string | Date;

}

export interface rowInterface {
  name: string;
  id: number;
  fullName: string;
}

export interface commentInterface {
  id: number;
  userId: number;
  text: string;
  name: string;
  date: string;
}

export interface newQ {
  from?: number | string;
  to?: number[];
  status: boolean;
  title?: string;
  manager?: string;
  question?: string;
  comments?: [];
  date?: string;
  createdTime: any;
  deadline: any;
  answer: string;
}
