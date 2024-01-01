import useApi from 'src/composables/UseApi'

export default function funcionarioApi () {
  const { list, getById, post, update, remove } = useApi('post')
  return {
    list,
    getById,
    post,
    update,
    remove
  }
}
