# Frontend Take-Home Exercise

Your task is to build a webpage with a user creation form. The form should take the following required inputs:

- Full Name
- Email
- Password
- Occupation
- State

Occupation and State should allow users to select from options returned by an endpoint. Users should only be able to select one occupation and one state. A GET request to `https://frontend-take-home.fetchrewards.com/form` will return a JSON body with the following format:

```json
{
    "occupations": [
        "occupation1",
        "occupation2",
        ...
    ],
    "states": [
        {
            "name": "Alabama",
            "abbreviation": "AL"
        },
        ...
    ]
}
```

You should submit the results of the form to the same endpoint (`https://frontend-take-home.fetchrewards.com/form`) via a POST request with a JSON body of the following format:

```json
{
  "name": "???",
  "email": "???",
  "password": "???",
  "occupation": "???",
  "state": "???"
}
```

The POST endpoint will return a 200 status code if all fields are provided. It does not perform any validation beyond this.

(It provides a simple `500 Internal Server Error` status code if all fields are not present.)

## Minimum Requirements

Your site must:

- Display a form with inputs for each field outlined above
- Allow a user to complete and submit the form
- Do not allow form submission without completing the entire form
- Provide feedback upon successful form submission
- You may complete this exercise using any languages or frameworks you'd like.

## How do I submit it?

Provide a link to a public repository (i.e. GitHub, Bitbucket, etc.) that contains your code to your recruiter.

## How will this exercise be evaluated?

An engineer will review the code you submit. You will be evaluated based on:

- Code quality
- Use of best practices
- Fulfillment of minimum requirements
- Site usability/UX
- You should provide any necessary documentation within the repository.
