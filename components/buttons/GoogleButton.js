const GoogleButton = ({ renderProps, content }) => {
  return (
    <button
      // isSignedIn={true}
      // onSuccess={responseGoogle}
      // clientId="698856264513-b8rl7o427e166fqp5rcu3hm6vqfkv212.apps.googleusercontent.com"
      onClick={renderProps?.onClick}
      disabled={renderProps?.disabled}
      className="button__google"
    >
      <img
        src="https://res.cloudinary.com/dkceblkn7/image/upload/v1638004998/boho-vendor-assets/Group_3_sd9skk.svg"
        alt="Google's G Logo"
      />
      <p>{content}</p>
    </button>
  );
};

export default GoogleButton;
