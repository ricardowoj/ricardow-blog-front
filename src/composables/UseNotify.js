import { useQuasar } from 'quasar'

export default function useNotify () {
  const $q = useQuasar()

  const notifySucess = (message) => {
    $q.notify({
      type: 'positive',
      icon: 'check',
      message: message || 'All right'
    })
  }

  const notifyError = (message) => {
    $q.notify({
      type: 'negative',
      icon: 'error',
      message: message || 'Failed'
    })
  }

  return {
    notifySucess,
    notifyError
  }
}
