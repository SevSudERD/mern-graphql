import Navbar from "../components/Navbar";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <div className="w-full h-full bg-white text-black">
        <h2>What is User Authentication & Authorization? </h2>
        <p className="text-center align-items">
          In application security, authentication and authorization are two
          crucial ideas that work together to guarantee access to the resources
          of an application. Many people frequently confuse these words – but
          after reading this guide, will we? NOT AGAIN! Authentication Verifying
          a users or an entitys identity is the process called Authentication.
          It entails validating the users credentials, such as a username and
          password, to ensure that the user is who they claim to be.
          Authorization The process of authorizing or refusing access to
          particular resources or functions within an application is known as
          Authorization. Once a user has been verified as authentic, the program
          checks their level of authorization to decide which areas of the
          application they can access. Authentication is comparable to when a
          college applicant is admitted to a program based on the results of a
          written exam. The student is permitted on school grounds, but is not
          permitted in a department or class that is not their own (that was not
          given to them during admission). This action is known as
          Authorization.
        </p>
        <br/>
      </div>
    </div>
  );
};

export default HomePage;
