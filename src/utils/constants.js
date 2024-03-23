export const LOGO = "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";
export const API_OPTIONS = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: process.env.REACT_APP_TMDB_KEY
    }
  };

export const IMG_CDN_URL= "https://image.tmdb.org/t/p/w500/"
export const BG_IMG_URL ="https://assets.nflxext.com/ffe/siteui/vlv3/93da5c27-be66-427c-8b72-5cb39d275279/9e8c6f69-bc3a-4df6-b155-b1cb9f59255d/IE-en-20240226-popsignuptwoweeks-perspective_alpha_website_small.jpg"
export const OPEN_API_KEY = process.env.REACT_APP_OPEN_API_KEY;