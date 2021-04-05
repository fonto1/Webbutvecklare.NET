using System;
using System.Collections.Generic;
using src;
using Xunit;

namespace src.Test {
    public class SoftwareTest {


        [Fact]
        public void ArchiveTask() {
            // Arrange
            string uppgift = "simma";
            SimpleTask task = new SimpleTask(uppgift);
            List < Task > testList = new List < Task > ();
            testList.Add(task);
            List < Task > archive = new List < Task > ();
            testList[0].changeDone();



            //Act
            for (int i = testList.Count - 1; i >= 0; i--) {
                if (testList[i].Done == true) {
                    archive.Add(testList[i]);
                    testList.RemoveAt(i);
                }
            }


            //Assert
            Assert.NotEmpty(archive);
            Assert.NotSame(archive, testList);
            Assert.Empty(testList);
        }


        [Fact]
        public void ChangeStatusOfTask() {
            // Arrange
            string uppgift = "simma";
            SimpleTask task = new SimpleTask(uppgift);
            Boolean defaultStatus = task.Done;

            //Act
            task.changeDone();

            //Assert
            Assert.True(task.Done);
            Assert.NotEqual(task.Done, defaultStatus);
        }

        [Fact]
        public void AddTaskToList() {
            // Arrange
            List < Task > testList = new List < Task > ();
            string uppgift = "simma";

            //Act
            SimpleTask testTask = new SimpleTask(uppgift);
            testList.Add(testTask);

            //Assert
            Assert.Equal("simma", testList[0].Name);
        }
    }
}