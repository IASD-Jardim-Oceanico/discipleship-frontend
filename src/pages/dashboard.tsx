import { GetServerSideProps } from 'next';
import { parseCookies } from 'nookies';
import React from 'react';
import { decodedUserId } from '../utils/jwt';

function dashboard() {
  return <div>dashboard</div>;
}

export default dashboard;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { 'nextauth.token': token } = parseCookies();

  if (!token)
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };

  return {
    props: {},
  };
};
