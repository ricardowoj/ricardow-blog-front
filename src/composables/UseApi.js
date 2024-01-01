import { api } from 'boot/axios'

export default function funcionarioApi (url) {
  const list = async () => {
    try {
      return await api.get(url)
    } catch (error) {
      throw new Error(error)
    }
  }
  const getById = async (id) => {
    try {
      return await api.get(`${url}/${id}`)
    } catch (error) {
      throw new Error(error)
    }
  }

  const post = async (form) => {
    try {
      return await api.post(url, form)
    } catch (error) {
      throw new Error(error)
    }
  }

  const update = async (form) => {
    try {
      return await api.put(`${url}/${form.id}`, form)
    } catch (error) {
      throw new Error(error)
    }
  }

  const remove = async (id) => {
    try {
      return await api.delete(`${url}/${id}`)
    } catch (error) {
      throw new Error(error)
    }
  }

  return {
    list,
    getById,
    post,
    update,
    remove
  }
}
