import unittest
import xmlrunner

class TestUM(unittest.TestCase):

    def setUp(self):
        self.driver = self.webdriver.Chrome(executable_path="C:\chromedriver_win32\chromedriver.exe")
        self.driver.get('file:///C:/Users/srdesai/VeativeWebVR/Structure_of_Phenol/login.html')
        self.driver.implicitly_wait(10)

    def test_numbers_3_4(self):
        self.driver.find_element_by_id("username").send_keys("Radikha")
        self.driver.find_element_by_id("age").send_keys("25")
        element = Select(self.driver.find_element_by_name('gender'))
        element.select_by_value("Girl")
        self.driver.find_element_by_id("submitBtn").click()
        self.assertEqual( multiply(3,4), 12)

    def test_strings_a_3(self):
        self.driver.find_element_by_id("username").send_keys("Sanjeev Desai")
        self.driver.find_element_by_id("age").send_keys("25")
        element = Select(self.driver.find_element_by_name('gender'))
        element.select_by_value("Boy")
        self.driver.find_element_by_id("submitBtn").click()
        self.assertEqual( multiply('a',3), 'aaa')

    def test_strings_a_3(self):
        self.assertEqual( multiply(3,3), 9)

def multiply(a,b):
 return a * b


if __name__ == '__main__':
    unittest.main(testRunner=xmlrunner.XMLTestRunner(output='./test_result'))