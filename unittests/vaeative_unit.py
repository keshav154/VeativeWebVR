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
        cls.driver.get('file:///D:/Santhosh/VeativeWebVR/Structure_of_Phenol/login.html')
        cls.driver.implicitly_wait(10)
    
    def test_login_form_validations(self):
        self.driver = webdriver.Chrome(executable_path="C:\chromedriver_win32\chromedriver.exe")
        self.driver.get('http://ec2-52-5-117-32.compute-1.amazonaws.com/unicef/public/')
        self.driver.implicitly_wait(10)
        loginurl = '//a[contains(text(),\'Login\')]'
        username = '//input[@id=\'unicef_username\']'
        passwd = '//input[@id=\'unicef_password\']'
        loginbtn = '//input[@id=\'login-btn\']'
        loginelement = WebDriverWait(self.driver,10).until(lambda driver:self.driver.find_element_by_xpath(loginurl))
        loginelement.click()
        user_element = WebDriverWait(self.driver,10).until(lambda driver:self.driver.find_element_by_xpath(username))
        user_element.send_keys("sanjeev")
        passwd_element = WebDriverWait(self.driver,10).until(lambda driver:self.driver.find_element_by_xpath(passwd))
        passwd_element.send_keys("admin1234")
        btn_element = WebDriverWait(self.driver,10).until(lambda driver:self.driver.find_element_by_xpath(loginbtn))
        btn_element.click()
        print("logged in successfully")
        return 0
        
    def test_signup_tag_validations(self):
        self.driver = webdriver.Chrome(executable_path="C:\chromedriver_win32\chromedriver.exe")
        self.driver.get('http://ec2-52-5-117-32.compute-1.amazonaws.com/unicef/public/')
        self.driver.implicitly_wait(10)
        
        loginbtn = '//a[contains(text(),\'Login\')]'
        
        btn_element = WebDriverWait(self.driver,10).until(lambda driver:self.driver.find_element_by_xpath(loginbtn))
        btn_element.click()
        return 0
    
    def test_signup_form_validations(self):
        
        self.driver = webdriver.Chrome(executable_path="C:\chromedriver_win32\chromedriver.exe")
        self.driver.get('http://ec2-52-5-117-32.compute-1.amazonaws.com/unicef/public/')
        self.driver.implicitly_wait(10)
        
        loginbtn = '//a[contains(text(),\'Login\')]'
        
        btn_element = WebDriverWait(self.driver,10).until(lambda driver:self.driver.find_element_by_xpath(loginbtn))
        btn_element.click()
        
        signupurl = '//a[contains(text(),\'Sign Up\')]'
        full_name = '//input[@id=\'FULL_NAME\']'
        email_id = '//input[@id=\'EMAIL_ID\']'
        username = '//input[@id=\'USER_NAME\']'
        passwd = '//input[@id=\'USER_PASSWORD\']'
        age = '//input[@id=\'USER_AGE\']'
        gender = '//select[@id=\'USER_GENDER\']'
        signup_btn = '//input[@id=\'userSignUpFrm-btn\']'
        captura = '//img[@id=\'captcha-image\']'
    
        loginelement = WebDriverWait(self.driver,10).until(lambda driver:self.driver.find_element_by_xpath(signupurl))
        loginelement.click()
        user_element = WebDriverWait(self.driver,10).until(lambda driver:self.driver.find_element_by_xpath(full_name))
        user_element.send_keys("sanjeev amar")
        passwd_element = WebDriverWait(self.driver,10).until(lambda driver:self.driver.find_element_by_xpath(email_id))
        passwd_element.send_keys("sanjeev.amar@gmail.com")
        btn_element = WebDriverWait(self.driver,10).until(lambda driver:self.driver.find_element_by_xpath(username))
        btn_element.send_keys("amarnath123")
        loginelement = WebDriverWait(self.driver,10).until(lambda driver:self.driver.find_element_by_xpath(passwd))
        loginelement.send_keys("sanjeev123")
        user_element = WebDriverWait(self.driver,10).until(lambda driver:self.driver.find_element_by_xpath(age))
        user_element.send_keys("24")
        passwd_element = WebDriverWait(self.driver,10).until(lambda driver:self.driver.find_element_by_xpath(gender))
        passwd_element.send_keys("male")
        sign_element = WebDriverWait(self.driver,10).until(lambda driver:self.driver.find_element_by_xpath(signup_btn))
        sign_element.click()
        return 0
        
        print("signup in successfully")
        
    def test_componet_lineandplain_validations(self):
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
        return 0
    
    def test_componet_structurePhonel_validations(self):
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
        self.driver.get('http://ec2-52-5-117-32.compute-1.amazonaws.com/WebVR/Aframe/ss200049/')
        self.driver.implicitly_wait(20)
        return 0
    
    def test_componet_complexNumbers_validations(self):
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
        self.driver.get('http://ec2-52-5-117-32.compute-1.amazonaws.com/WebVR/Aframe/hs300012/')
        self.driver.implicitly_wait(20)
        return 0
    
    def test_componet_Reproduct_part_validations(self):
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
        self.driver.get('http://ec2-52-5-117-32.compute-1.amazonaws.com/WebVR/Aframe/ms100027/')
        self.driver.implicitly_wait(20)
        return 0
    
    def test_componet_OpaqueT_validations(self):
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
        self.driver.get('http://ec2-52-5-117-32.compute-1.amazonaws.com/WebVR/Aframe/hs400052/')
        self.driver.implicitly_wait(20)
        return 0
    
    def test_componet_series_parallel_validations(self):
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
        self.driver.get('http://ec2-52-5-117-32.compute-1.amazonaws.com/WebVR/Aframe/hs400034/')
        self.driver.implicitly_wait(20)
        return 0
    
    def test_componet_atomic_model_validations(self):
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
        self.driver.get('http://ec2-52-5-117-32.compute-1.amazonaws.com/WebVR/Aframe/hs200040/')
        self.driver.implicitly_wait(20)
        return 0
    
    def test_componet_Galv_validations(self):
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
        self.driver.get('http://ec2-52-5-117-32.compute-1.amazonaws.com/WebVR/Aframe/hs400060/')
        self.driver.implicitly_wait(20)
        return 0
    
    def test_componet_Dominent_recessive_validations(self):
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
        self.driver.get('http://ec2-52-5-117-32.compute-1.amazonaws.com/WebVR/Aframe/ms100176/')
        self.driver.implicitly_wait(20)
        return 0
    
    def test_componet_lines_validations(self):
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
        self.driver.get('http://ec2-52-5-117-32.compute-1.amazonaws.com/WebVR/Aframe/ms300045/')
        self.driver.implicitly_wait(20)
        return 0
        
        
    def test_componet_dot_structure_validations(self):
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
        self.driver.get('http://ec2-52-5-117-32.compute-1.amazonaws.com/WebVR/Aframe/hs200069/')
        self.driver.implicitly_wait(20)
        return 0
    
    def test_componet_Humun_brain_validations(self):
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
        self.driver.get('http://ec2-52-5-117-32.compute-1.amazonaws.com/WebVR/Aframe/ms100057/')
        self.driver.implicitly_wait(20)
        return 0
        

        self.driver = webdriver.Chrome(executable_path="C:\chromedriver_win32\chromedriver.exe")
        self.driver.get('http://ec2-52-5-117-32.compute-1.amazonaws.com/WebVR/Aframe/ms300035/')
        self.driver.implicitly_wait(20)
        return 0
    
    def test_impact_analysis_launch(self):
        self.driver = webdriver.Chrome(executable_path="C:\chromedriver_win32\chromedriver.exe")
        self.driver.get('http://ec2-52-5-117-32.compute-1.amazonaws.com/unicef/public/report')
        self.driver.implicitly_wait(10)
    
        print("impact analysis logged successfully..")
    
    def test_impact_analysis_AI(self):
        self.driver = webdriver.Chrome(executable_path="C:\chromedriver_win32\chromedriver.exe")
        self.driver.get('http://ec2-52-5-117-32.compute-1.amazonaws.com/unicef/public/report')
        self.driver.implicitly_wait(10)
        
        
        activity_path = '//a[contains(text(),\'Activity Information\')]'
        loginelement = WebDriverWait(self.driver,10).until(lambda driver:self.driver.find_element_by_xpath(activity_path))
        loginelement.click()
    
    def test_impact_analysis_socre_by_module(self):
        self.driver = webdriver.Chrome(executable_path="C:\chromedriver_win32\chromedriver.exe")
        self.driver.get('http://ec2-52-5-117-32.compute-1.amazonaws.com/unicef/public/report')
        self.driver.implicitly_wait(10)
        
        
        activity_path = '//a[contains(text(),\'Score By Module\')]'
        loginelement = WebDriverWait(self.driver,10).until(lambda driver:self.driver.find_element_by_xpath(activity_path))
        loginelement.click()
    
    def test_impact_analysis_module_attempted(self):
        self.driver = webdriver.Chrome(executable_path="C:\chromedriver_win32\chromedriver.exe")
        self.driver.get('http://ec2-52-5-117-32.compute-1.amazonaws.com/unicef/public/report')
        self.driver.implicitly_wait(10)
        
        
        activity_path = '//a[contains(text(),\'Modules Attempted\')]'
        loginelement = WebDriverWait(self.driver,10).until(lambda driver:self.driver.find_element_by_xpath(activity_path))
        loginelement.click()
        
    
        
    # @classmethod
    # def tearDownClass(cls):
    #     cls.driver.close()
    #     cls.driver.quit()
    #     print("Test completed..!!")
        

            
if __name__ == "__main__":
    # unittest.main(testRunner=HtmlTestRunner.HTMLTestRunner(output='example_dir'))
    unittest.main(testRunner=xmlrunner.XMLTestRunner(output='test_result'))