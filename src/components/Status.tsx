// union type
type StatusProps = {
  status: "loading" | "success" | "error";
};

const Status = (props: StatusProps) => {
  let message;
  if (props.status === "loading") {
    message = "Loading...";
  } else if (props.status === "success") {
    message = "Success 😃";
  } else if (props.status === "error") {
    message = "Error ❌";
  }
  return <div>{message}</div>;
};

export default Status;
