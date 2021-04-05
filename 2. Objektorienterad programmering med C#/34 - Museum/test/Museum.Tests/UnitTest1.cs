using System;
using Museum.ArtWorks;
using Museum.Rooms;
using Xunit;

namespace Museum.Tests
{
    public class UnitTest1
    {


       [Fact]
        public void TestAddArtTestWithLengthOfList()
        {
            int num = 1;
            Room rum = new Room("grön");
            Art mona = new Art("Mona", "Skumma Mona", "Leronardo Da Vinci");    // Arrange

            rum.AddArt(mona);    //Act
            
           
            Assert.Equal(num,rum.ListArts.Count); //Assert

        }


        [Fact]
        public void CreateArtObjectTestWithAuthorAttribut()
        {
            string konstnar = "LeoMessi";   //Arrange

            Art tavla = new Art("Fotboll","Fotbollsguden","LeoMessi");  // Act

            Assert.Equal(konstnar,tavla.Author); //Assert

        }

        [Fact]
        public void CreateRoomObjectTestWithName()
        {
            var name = "grön";   //Arrange

            Room rum = new Room("grön");  // Act

            Assert.Equal(name,rum.Name); //Assert

        }
    }
}
