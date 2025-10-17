/**
 * Класс RegisterForm управляет формой
 * регистрации
 * */
class RegisterForm extends AsyncForm {
  /**
   * Производит регистрацию с помощью User.register
   * После успешной регистрации устанавливает
   * состояние App.setState( 'user-logged' )
   * и закрывает окно, в котором находится форма
   * */
  onSubmit(data) {
    User.register(data, (err, response) => {
      if (response && response.success === true) {
        this.element.reset();
        App.setState('user-logged');

        const parentModal = this.element.closest('.modal');

        const modalWindow = App.getModal(parentModal.id);

        modalWindow.close();
      }
    })
  }
}