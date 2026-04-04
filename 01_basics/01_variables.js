const accountId = 144553;
let accountEmail = "sumit@google.com";
var accountPassword = "12345";
accountCity = "Solapur";

// accountId = 2; // this is not allowed we can not change the valur of const

accountEmail = "bhasagi@google.com";
accountPassword = "987654";
accountCity = "Pune";

let accountState; // This will give output as undefined

console.log(accountId);

console.table([
  accountId,
  accountEmail,
  accountPassword,
  accountCity,
  accountState,
]);

// console.table() use krne prr output aaise aata hain -->
// ┌─────────┬──────────────────────┐
// │ (index) │ Values               │
// ├─────────┼──────────────────────┤
// │ 0       │ 144553               │
// │ 1       │ 'bhasagi@google.com' │
// │ 2       │ '987654'             │ 
// │ 3       │ 'Pune'               │
// │ 4       │ undefined            │
// └─────────┴──────────────────────┘
