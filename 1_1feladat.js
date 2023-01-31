const nums = [3, 4, 9, 6, 2];

// for ciklussal i változóval egyesével vizsgáljuk a nums tömb elemeit
for (let i = 0; i < nums.length; i++) {
  //2-vel osztva a maradék megegyezik-e 0-val feltételt vizsgáljuk
  //ha nem teljesül a feltétel az else elágazás fog lefutni
  if (nums[i] % 2 === 0) {
    console.log(nums[i] + ": osztható");
  } else {
    console.log(nums[i] + ": nem osztható");
  }
}
