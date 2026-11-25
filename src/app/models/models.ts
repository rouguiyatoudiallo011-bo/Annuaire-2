 
 export type Person  = {
    name: {
         title: string;
    first: string;
    last: string
    },
    location : {
    city: string
},
     picture : {
    large: string;
},
    dob: {
        age: number
    };
    phone: string;
    email: string;
    id: {
      value: string;
    }
}

export type PeopleResponse = {
    results: Person[];
}

export type NewPerson = {
  firstname: string;
  lastname: string;
  gender: string;
  age: number;
  email: string;
  phone: string;
  city: string;
};