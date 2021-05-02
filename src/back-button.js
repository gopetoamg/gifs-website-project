const visits = JSON.parse(localStorage.getItem('visits')) || [];

export const history = (page) => {
  visits.push(page);
  localStorage.setItem('visits', JSON.stringify(visits));
};

export const lastVisited = () => visits[visits.length - 1];
