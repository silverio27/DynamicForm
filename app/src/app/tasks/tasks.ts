export class Tasks {
  fields = [
    {
      property: "id",
      type: "Number",
      label: "Id",
      visible: false,
      key: true,
    },
    {
      property: "name",
      type: "string",
      label: "Nome",
      required: true,
    },
    {
      property: "listName",
      label: "Lista",
      type: "string",
      required: true,
    },
    {
      property: "done",
      type: "boolean",
      label: "Pronto",
      booleanTrue: "Sim",
      booleanFalse: "Não",
      required: true,
    },
  ];
}
