import {API_BASE_URL} from './../constants/ApiUrl';

export const updateEventService = async eventForm => {
  try {
    let response = await fetch(`${API_BASE_URL}/updateevent.php`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(eventForm),
    });
    response = await response.json();
    return {
      error: null,
      data: response,
    };
  } catch (error) {
    return {
      error: error,
      data: null,
    };
  }
};
