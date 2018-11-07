import pekka from '../app/assets/pekka.jpg'
import arvidsson from '../app/assets/arvidsson.jpg'

export const getCurrentProfile = id => dispatch =>
  new Promise(resolve => {
    setTimeout(() => {
      let profile

      if (id === 1) {
        profile = {
          id,
          name: 'Pekka Rinne',
          image: pekka
        }
      } else {
        profile = {
          id,
          name: 'Viktor Arvidsson',
          image: arvidsson
        }
      }

      dispatch({
        type: SET_CURRENT_PROFILE,
        profile
      })

      resolve(profile)
    }, 3000)
  })

export const removeCurrentProfile = () => dispatch =>
  new Promise(resolve => {
    dispatch({
      type: SET_CURRENT_PROFILE,
      profile: {}
    })

    resolve({})
  })
