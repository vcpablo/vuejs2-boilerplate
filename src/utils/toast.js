import eventBus from './eventBus'

function show({ message, title, variant, to }) {
  eventBus.$emit('toast', { message, title, variant, to })
}
function success(message, title, to) {
  show({ message, title, variant: 'success', to })
}
function error(message, title, to) {
  show({ message, title, variant: 'danger', to })
}
function warning(message, title = '', to) {
  show({ message, title, variant: 'warning', to })
}
export default {
  show,
  error,
  success,
  warning
}
