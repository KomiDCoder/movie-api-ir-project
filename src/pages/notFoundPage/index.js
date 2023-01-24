import NotFoundPageStyle from "./style";
const NotFoundPage = () => {
  return (
    <NotFoundPageStyle>
      <div>
        <h3>404 : that's an error</h3>
        <p>
          Your client does not have permission to get URL /fonts from this
          server. That’s all we know.
        </p>
      </div>
    </NotFoundPageStyle>
  );
};
export default NotFoundPage;
