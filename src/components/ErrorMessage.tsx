interface Props {
  error: string;
}

const ErrorMessage = ({error}: Props) => {
  return (
    <div className='grow flex place-items-center place-self-center'>
      <p className='font-bold'>{error}</p>
    </div>
  );
};

export default ErrorMessage;
