import gpl from 'graphql-tag'

export default {
    query: {

    },
    mutation: {
        login: gpl`
            mutation($username: String!, $password: String!) {
                login(username: $username, password: $password){
                success
                token
                errors{
                    path
                    message
                }
                }
            }
        `,
        createUser: gpl`
        mutation($username: String!, $password: String!, $fullname: String!, $email: String!){
            createUser(username:$username, password:$password, fullname:$fullname, email:$email){
                success
                errors{
                    path
                    message
                }
            }
        }`

    },
    //suscription: {}
}