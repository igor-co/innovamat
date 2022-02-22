import { config } from 'conf';
import { Layout } from 'ui/_components/Layout';
export const NotFoundView = () => {
  const { messages } = config;

  return (
    <Layout>
      <main>
        <h2>{messages['error']}</h2>
        <h1>{messages['pageNotExist']}</h1>
      </main>
    </Layout>
  );
};
