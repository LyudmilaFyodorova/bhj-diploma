/**
 * Класс LoginForm управляет формой
 * входа в портал
 * */
class LoginForm extends AsyncForm {
  /**
   * Производит авторизацию с помощью User.login
   * После успешной авторизации, сбрасывает форму,
   * устанавливает состояние App.setState( 'user-logged' ) и
   * закрывает окно, в котором находится форма
   * */
  onSubmit(data) {
    User.login();
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