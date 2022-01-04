import Image from 'next/image';

const ErrorMessage = ({ content, visible, setVisible }) => {
  return (
    <div
      className={`wrapper-form ${visible ? 'error-active' : 'error-hidden'}`}>
      <div className='error__header'>
        <p className='error__headerContent'>An error has occured!</p>
        <Image
          onClick={() => setVisible(false)}
          src='https://res.cloudinary.com/dkceblkn7/image/upload/v1640912221/boho%20vendor%20assets/Group_377_1_qqzsjs.svg'
          alt='close the error message'
          height={18}
          width={18}
        />
      </div>
      <div className='error__content'>
        <p>{content}</p>
      </div>
    </div>
  );
};

export default ErrorMessage;
