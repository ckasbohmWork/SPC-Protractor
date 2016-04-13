'use strict';   
      
    goToURL: function() {  
        browser.get('http://[???????IP]:[port]/petclinic/'); //overrides baseURL  
    },  
      
    addOwner: function(item) {  
        var driver = this.pageObjectFile;  
          
		driver.get(config.getPetClinicUrl()+"/owners/find.html");
        driver.findElement(By.xpath("/html/body/div/a")).click();
        driver.findElement(By.xpath("//input[@id='firstName']")).sendKeys("John");
        driver.findElement(By.xpath("//input[@id='lastName']")).sendKeys("Smith");
        driver.findElement(By.xpath("//input[@id='address']")).sendKeys("address");
        driver.findElement(By.xpath("//input[@id='city']")).sendKeys("city");
        driver.findElement(By.xpath("//input[@id='telephone']")).sendKeys("1234567890");
        driver.findElement(By.xpath("//*[@id='add-owner-form']/div[6]/button")).submit();
        assertTrue(driver.findElement(By.xpath("/html/body/div/table[1]/tbody/tr[1]/td/b")).getText().equals("John Smith"));
  
    } 
};