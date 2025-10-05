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
    User.register();
    const form = this.element.querySelector('.form');


    if (response.success === true) {
      form.reset();
      App.setState('user-logged');

      const parentModal = form.closest('.modal');

      const modalWindow = App.getModal(parentModal.id);

      modalWindow.close();
    }
  }
}