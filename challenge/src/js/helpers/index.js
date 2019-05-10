import history from '../router/history';

export const changePage = pathname => {
  history.push(pathname);
};
