import unittest
from selenium import webdriver
from selenium.webdriver.support.select import Select
import HtmlTestRunner
from selenium.webdriver.support.ui import WebDriverWait
from time import sleep
import xmlrunner

class Test(unittest.TestCase):
    
    @classmethod
    def setUpClass(cls):
        cls.driver = webdriver.Chrome(executable_path="C:\chromedriver_win32\chromedriver.exe")
        cls.driver.get('file:///C:/Users/srdesai/VeativeWebVR/Structure_of_Phenol/login.html')
        cls.driver.implicitly_wait(10)
    
    def test_login_form_validations(self):
        self.driver = webdriver.Chrome(executable_path="C:\chromedriver_win32\chromedriver.exe")
        self.driver.get('http://ec2-52-5-117-32.compute-1.amazonaws.com/unicef/public/')
        self.driver.implicitly_wait(10)
        loginurl = '//a[contains(text(),\'Login\')]'
        username = '//input[@id=\'unicef_username\']'
        passwd = '//input[@id=\'unicef_password\']'
        loginbtn = '//input[@id=\'login-btn\']'
        clicable = '//div[contains(text(),\'In phenol, hydroxy functional group is directly at\')]'     
        loginelement = WebDriverWait(self.driver,10).until(lambda driver:self.driver.find_element_by_xpath(loginurl))
        loginelement.click()
        user_element = WebDriverWait(self.driver,10).until(lambda driver:self.driver.find_element_by_xpath(username))
        user_element.send_keys("sanjeev")
        passwd_element = WebDriverWait(self.driver,10).until(lambda driver:self.driver.find_element_by_xpath(passwd))
        passwd_element.send_keys("admin1234")
        btn_element = WebDriverWait(self.driver,10).until(lambda driver:self.driver.find_element_by_xpath(loginbtn))
        btn_element.click()

        self.driver = webdriver.Chrome(executable_path="C:\chromedriver_win32\chromedriver.exe")
        self.driver.get('http://ec2-52-5-117-32.compute-1.amazonaws.com/WebVR/Aframe/ms300035/')
        self.driver.implicitly_wait(20)
    
        print("logged in successfully")
        
    @classmethod
    def tearDownClass(cls):
        cls.driver.close()
        cls.driver.quit()
        print("Test completed..!!")
        

            
if __name__ == "__main__":
    # unittest.main(testRunner=HtmlTestRunner.HTMLTestRunner(output='example_dir'))
    unittest.main(testRunner=xmlrunner.XMLTestRunner(output='test_result'))