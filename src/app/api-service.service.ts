import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';

@Injectable({
  providedIn: 'root',
})
export class ApiServiceService {
  constructor(private apollo: Apollo) {}

  async signinUser() {
    return this.apollo
      .watchQuery({
        query: gql`
          {
            getUsers(email: "abc@Caxsol.com", id: "11") {
              id
              email
              contactNo
              firstName
              address
              lastName
              role
              status
            }
          }
        `,
      })
      .valueChanges.subscribe((result) => result.data);
  }
}
