// CTPR :
// POST https://pickleballbrackets.com/Json.asmx/GetPlayerPublicProfile
// {
//   "ReturnType": "json",
//   "ClubID": "2a56413a-0012-4d1d-9792-c54138ad1b4e",
//   "SportID": "dc1894c6-7e85-43bc-bfa2-3993b0dd630f",
//   "UserID": "0df3b359-d935-4c79-a16a-ce373f55db07"
// }
// DUPR :
//  GET https://backend.mydupr.com/player/v1.0/7037778996
// Bearer eyJhbGciOiJSUzUxMiJ9.eyJpc3MiOiJodHRwczovL2R1cHIuZ2ciLCJpYXQiOjE3MTUzNzAwNzAsImp0aSI6IjU2MDQzOTYzODMiLCJleHAiOjE3MTc5NjIwNzAsInN1YiI6ImNtbHVaMjh1WW1WaGRXeHBaWFZBWjIxaGFXd3VZMjl0In0.aT3qyR-9r4_ZyV4h7mhwecrzO_MbNt5h20ekkzdYFKKVyKH6VBa9i8Js0z0GNZA5cjckdYZPAMIKx4nKxjF_s8SwJVlDpge2FAlkWpRkeSgfUuaQW94-fvmTfBbxYoBfWmrmanQlvf4Y50gEf7Bqam6TsAGSNwuU1mMFvBUTTfUfxuBgbB2TFiQY3_UOXrUt90L9ysvlLPGgbPQp_Z9h-gJXhx4UGE_dImxvD54Fp664XDlvWHmtqg1kbjYDa1aE7_57GevdL85hb671U7534K-2MNhGpQqZ42hrCqdU2ctcEoyQDhHf9Oc6ZNcHLAhUPpP46HIVTsAN0ArroXbgjA

export const REAL_DATA = [
  {
    dupr: {
      id: 5604396383,
      fullName: 'Eric Beaulieu',
      firstName: 'Eric',
      lastName: 'Beaulieu',
      shortAddress: 'Granby, QC, CA',
      gender: 'MALE',
      age: 43,
      imageUrl:
        'https://dupr.s3.us-east-1.amazonaws.com/images/b6HN2OcKJlWgLuwSn2illYQB.jpg',
      ratings: {
        singles: 'NR',
        singlesVerified: 'NR',
        singlesProvisional: false,
        singlesReliabilityScore: 0,
        doubles: '4.329',
        doublesVerified: 'NR',
        doublesProvisional: false,
        doublesReliabilityScore: 85,
        defaultRating: 'DOUBLES',
      },
      enablePrivacy: false,
      isPlayer1: true,
      verifiedEmail: true,
      registered: true,
      duprId: '0YKZ5X',
      showRatingBanner: false,
      status: 'ACTIVE',
      sponsor: {},
      lucraConnected: false,
    },
    ctpr: {
      UseSeniorAndU50: '0',
      UserID: '746646FE-B46E-4677-9D2E-181DD725007E',
      FirstName: 'Eric',
      LastName: 'Beaulieu',
      NameSuffix: '',
      City: 'Granby',
      State_Abbreviation: 'QC',
      State_Title: 'Quebec',
      Country_Abbreviation: 'CAN',
      Country_Title: 'Canada',
      Nickname: '',
      Gender: 'M',
      Height_Feet: '0',
      Height_Inches: '0',
      Handed: 'RT',
      ShowAgeToPublic: '1',
      ShowCityToPublic: '1',
      ShowStateToPublic: '1',
      ShowOnlyFirstInitialOfLastNameToPublic: '0',
      ProfileImage: '',
      Age: '43',
      TotalGames: '8',
      TotalLeagues: '0',
      TotalClubs: '1',
      Ratings_GroupAllDoublesTogether: '0',
      DateUpdated: '5/9/2024 2:38:48 PM',
      DateFuture: '5/27/2024 7:06:19 AM',
      DateNextLiveUpdate: '7/1/2024 12:00:00 AM',
      TourneyID_PlayingInRightNow: '',
      TourneyTitle_PlayingInRightNow: '',
      Overall_Doubles_NumberOfGames: 8,
      Overall_Doubles_Skill: 3.5,
      Overall_Doubles_Rating: 3.9552489540420006,
      Overall_Doubles_Rank_WithinSkill: 0,
      Overall_Doubles_RankOutOf_WithinSkill: 0,
      Overall_Doubles_Rank: 0,
      Overall_Doubles_RankOutOf: 0,
      Overall_Doubles_FutureRating: 4.2912406047332006,
      Overall_Doubles_FutureSkill: 4.0,
      Overall_Doubles_FutureRank: 0,
      Overall_Doubles_FutureRankOutOf: 0,
      Overall_Mix_NumberOfGames: 0,
      Overall_Mix_Skill: 4.0,
      Overall_Mix_Rating: 4.2427500004080008,
      Overall_Mix_Rank_WithinSkill: 0,
      Overall_Mix_RankOutOf_WithinSkill: 0,
      Overall_Mix_Rank: 0,
      Overall_Mix_RankOutOf: 0,
      Overall_Mix_FutureRating: 4.4456525427793991,
      Overall_Mix_FutureSkill: 4.0,
      Overall_Mix_FutureRank: 0,
      Overall_Mix_FutureRankOutOf: 0,
      Overall_Singles_NumberOfGames: 0,
      Overall_Singles_Skill: 3.5,
      Overall_Singles_Rating: 3.75,
      Overall_Singles_Rank_WithinSkill: 0,
      Overall_Singles_RankOutOf_WithinSkill: 0,
      Overall_Singles_Rank: 0,
      Overall_Singles_RankOutOf: 0,
      Overall_Singles_FutureRating: 3.75,
      Overall_Singles_FutureSkill: 3.5,
      Overall_Singles_FutureRank: 0,
      Overall_Singles_FutureRankOutOf: 0,
      Overall_SkinnySingles_NumberOfGames: 0,
      Overall_SkinnySingles_Skill: 3.5,
      Overall_SkinnySingles_Rating: 3.75,
      Overall_SkinnySingles_Rank_WithinSkill: 0,
      Overall_SkinnySingles_RankOutOf_WithinSkill: 0,
      Overall_SkinnySingles_Rank: 0,
      Overall_SkinnySingles_RankOutOf: 0,
      Overall_SkinnySingles_FutureRating: 3.75,
      Overall_SkinnySingles_FutureSkill: 3.5,
      Overall_SkinnySingles_FutureRank: 0,
      Overall_SkinnySingles_FutureRankOutOf: 0,
      Senior_Doubles_NumberOfGames: 0,
      Senior_Doubles_Skill: 0,
      Senior_Doubles_Rating: 0,
      Senior_Doubles_Rank_WithinSkill: 0,
      Senior_Doubles_RankOutOf_WithinSkill: 0,
      Senior_Doubles_Rank: 0,
      Senior_Doubles_RankOutOf: 0,
      Senior_Doubles_FutureRating: 0,
      Senior_Doubles_FutureSkill: 0,
      Senior_Doubles_FutureRank: 0,
      Senior_Doubles_FutureRankOutOf: 0,
      Senior_Mix_NumberOfGames: 0,
      Senior_Mix_Skill: 0,
      Senior_Mix_Rating: 0,
      Senior_Mix_Rank_WithinSkill: 0,
      Senior_Mix_RankOutOf_WithinSkill: 0,
      Senior_Mix_Rank: 0,
      Senior_Mix_RankOutOf: 0,
      Senior_Mix_FutureRating: 0,
      Senior_Mix_FutureSkill: 0,
      Senior_Mix_FutureRank: 0,
      Senior_Mix_FutureRankOutOf: 0,
      Senior_Singles_NumberOfGames: 0,
      Senior_Singles_Skill: 0,
      Senior_Singles_Rating: 0,
      Senior_Singles_Rank_WithinSkill: 0,
      Senior_Singles_RankOutOf_WithinSkill: 0,
      Senior_Singles_Rank: 0,
      Senior_Singles_RankOutOf: 0,
      Senior_Singles_FutureRating: 0,
      Senior_Singles_FutureSkill: 0,
      Senior_Singles_FutureRank: 0,
      Senior_Singles_FutureRankOutOf: 0,
      Senior_SkinnySingles_NumberOfGames: 0,
      Senior_SkinnySingles_Skill: 0,
      Senior_SkinnySingles_Rating: 0,
      Senior_SkinnySingles_Rank_WithinSkill: 0,
      Senior_SkinnySingles_RankOutOf_WithinSkill: 0,
      Senior_SkinnySingles_Rank: 0,
      Senior_SkinnySingles_RankOutOf: 0,
      Senior_SkinnySingles_FutureRating: 0,
      Senior_SkinnySingles_FutureSkill: 0,
      Senior_SkinnySingles_FutureRank: 0,
      Senior_SkinnySingles_FutureRankOutOf: 0,
      U50_Doubles_NumberOfGames: 0,
      U50_Doubles_Skill: 0,
      U50_Doubles_Rating: 0,
      U50_Doubles_Rank_WithinSkill: 0,
      U50_Doubles_RankOutOf_WithinSkill: 0,
      U50_Doubles_Rank: 0,
      U50_Doubles_RankOutOf: 0,
      U50_Doubles_FutureRating: 0,
      U50_Doubles_FutureSkill: 0,
      U50_Doubles_FutureRank: 0,
      U50_Doubles_FutureRankOutOf: 0,
      U50_Mix_NumberOfGames: 0,
      U50_Mix_Skill: 0,
      U50_Mix_Rating: 0,
      U50_Mix_Rank_WithinSkill: 0,
      U50_Mix_RankOutOf_WithinSkill: 0,
      U50_Mix_Rank: 0,
      U50_Mix_RankOutOf: 0,
      U50_Mix_FutureRating: 0,
      U50_Mix_FutureSkill: 0,
      U50_Mix_FutureRank: 0,
      U50_Mix_FutureRankOutOf: 0,
      U50_Singles_NumberOfGames: 0,
      U50_Singles_Skill: 0,
      U50_Singles_Rating: 0,
      U50_Singles_Rank_WithinSkill: 0,
      U50_Singles_RankOutOf_WithinSkill: 0,
      U50_Singles_Rank: 0,
      U50_Singles_RankOutOf: 0,
      U50_Singles_FutureRating: 0,
      U50_Singles_FutureSkill: 0,
      U50_Singles_FutureRank: 0,
      U50_Singles_FutureRankOutOf: 0,
      U50_SkinnySingles_NumberOfGames: 0,
      U50_SkinnySingles_Skill: 0,
      U50_SkinnySingles_Rating: 0,
      U50_SkinnySingles_Rank_WithinSkill: 0,
      U50_SkinnySingles_RankOutOf_WithinSkill: 0,
      U50_SkinnySingles_Rank: 0,
      U50_SkinnySingles_RankOutOf: 0,
      U50_SkinnySingles_FutureRating: 0,
      U50_SkinnySingles_FutureSkill: 0,
      U50_SkinnySingles_FutureRank: 0,
      U50_SkinnySingles_FutureRankOutOf: 0,
    },
  },
  {
    dupr: {
      id: 7037778996,
      fullName: 'Ernesto Fajardo',
      firstName: 'Ernesto',
      lastName: 'Fajardo',
      shortAddress: 'Montréal, QC, CA',
      gender: 'MALE',
      age: 25,
      hand: 'RIGHT',
      ratings: {
        singles: '5.387',
        singlesVerified: 'NR',
        singlesProvisional: false,
        singlesReliabilityScore: 3,
        doubles: '5.909',
        doublesVerified: 'NR',
        doublesProvisional: false,
        doublesReliabilityScore: 7,
        defaultRating: 'DOUBLES',
      },
      enablePrivacy: false,
      isPlayer1: true,
      verifiedEmail: true,
      registrationType: 'UNCLAIMED',
      registered: true,
      duprId: '8KD7OQ',
      showRatingBanner: false,
      status: 'ACTIVE',
      sponsor: {},
      lucraConnected: false,
    },
    ctpr: {
      UseSeniorAndU50: '0',
      UserID: '0DF3B359-D935-4C79-A16A-CE373F55DB07',
      FirstName: 'Ernesto',
      LastName: 'Fajardo',
      NameSuffix: '',
      City: '',
      State_Abbreviation: '',
      State_Title: '',
      Country_Abbreviation: 'CAN',
      Country_Title: 'Canada',
      Nickname: '',
      Gender: 'M',
      Height_Feet: '0',
      Height_Inches: '0',
      Handed: 'RT',
      ShowAgeToPublic: '1',
      ShowCityToPublic: '0',
      ShowStateToPublic: '0',
      ShowOnlyFirstInitialOfLastNameToPublic: '0',
      ProfileImage: '',
      Age: '25',
      TotalGames: '228',
      TotalLeagues: '0',
      TotalClubs: '2',
      Ratings_GroupAllDoublesTogether: '0',
      DateUpdated: '5/1/2024 8:02:13 AM',
      DateFuture: '5/27/2024 7:06:19 AM',
      DateNextLiveUpdate: '7/1/2024 12:00:00 AM',
      TourneyID_PlayingInRightNow: '',
      TourneyTitle_PlayingInRightNow: '',
      Overall_Doubles_NumberOfGames: 98,
      Overall_Doubles_Skill: 6.0,
      Overall_Doubles_Rating: 6.0070691154581013,
      Overall_Doubles_Rank_WithinSkill: 0,
      Overall_Doubles_RankOutOf_WithinSkill: 0,
      Overall_Doubles_Rank: 0,
      Overall_Doubles_RankOutOf: 0,
      Overall_Doubles_FutureRating: 6.0070691154581013,
      Overall_Doubles_FutureSkill: 6.0,
      Overall_Doubles_FutureRank: 0,
      Overall_Doubles_FutureRankOutOf: 0,
      Overall_Mix_NumberOfGames: 82,
      Overall_Mix_Skill: 5.5,
      Overall_Mix_Rating: 5.9310456095953006,
      Overall_Mix_Rank_WithinSkill: 0,
      Overall_Mix_RankOutOf_WithinSkill: 0,
      Overall_Mix_Rank: 0,
      Overall_Mix_RankOutOf: 0,
      Overall_Mix_FutureRating: 5.9310456095953006,
      Overall_Mix_FutureSkill: 5.5,
      Overall_Mix_FutureRank: 0,
      Overall_Mix_FutureRankOutOf: 0,
      Overall_Singles_NumberOfGames: 48,
      Overall_Singles_Skill: 5.0,
      Overall_Singles_Rating: 5.3260778466071006,
      Overall_Singles_Rank_WithinSkill: 0,
      Overall_Singles_RankOutOf_WithinSkill: 0,
      Overall_Singles_Rank: 0,
      Overall_Singles_RankOutOf: 0,
      Overall_Singles_FutureRating: 5.3260778466071006,
      Overall_Singles_FutureSkill: 5.0,
      Overall_Singles_FutureRank: 0,
      Overall_Singles_FutureRankOutOf: 0,
      Overall_SkinnySingles_NumberOfGames: 0,
      Overall_SkinnySingles_Skill: 5.0,
      Overall_SkinnySingles_Rating: 5.25,
      Overall_SkinnySingles_Rank_WithinSkill: 0,
      Overall_SkinnySingles_RankOutOf_WithinSkill: 0,
      Overall_SkinnySingles_Rank: 0,
      Overall_SkinnySingles_RankOutOf: 0,
      Overall_SkinnySingles_FutureRating: 5.25,
      Overall_SkinnySingles_FutureSkill: 5.0,
      Overall_SkinnySingles_FutureRank: 0,
      Overall_SkinnySingles_FutureRankOutOf: 0,
      Senior_Doubles_NumberOfGames: 0,
      Senior_Doubles_Skill: 0,
      Senior_Doubles_Rating: 0,
      Senior_Doubles_Rank_WithinSkill: 0,
      Senior_Doubles_RankOutOf_WithinSkill: 0,
      Senior_Doubles_Rank: 0,
      Senior_Doubles_RankOutOf: 0,
      Senior_Doubles_FutureRating: 0,
      Senior_Doubles_FutureSkill: 0,
      Senior_Doubles_FutureRank: 0,
      Senior_Doubles_FutureRankOutOf: 0,
      Senior_Mix_NumberOfGames: 0,
      Senior_Mix_Skill: 0,
      Senior_Mix_Rating: 0,
      Senior_Mix_Rank_WithinSkill: 0,
      Senior_Mix_RankOutOf_WithinSkill: 0,
      Senior_Mix_Rank: 0,
      Senior_Mix_RankOutOf: 0,
      Senior_Mix_FutureRating: 0,
      Senior_Mix_FutureSkill: 0,
      Senior_Mix_FutureRank: 0,
      Senior_Mix_FutureRankOutOf: 0,
      Senior_Singles_NumberOfGames: 0,
      Senior_Singles_Skill: 0,
      Senior_Singles_Rating: 0,
      Senior_Singles_Rank_WithinSkill: 0,
      Senior_Singles_RankOutOf_WithinSkill: 0,
      Senior_Singles_Rank: 0,
      Senior_Singles_RankOutOf: 0,
      Senior_Singles_FutureRating: 0,
      Senior_Singles_FutureSkill: 0,
      Senior_Singles_FutureRank: 0,
      Senior_Singles_FutureRankOutOf: 0,
      Senior_SkinnySingles_NumberOfGames: 0,
      Senior_SkinnySingles_Skill: 0,
      Senior_SkinnySingles_Rating: 0,
      Senior_SkinnySingles_Rank_WithinSkill: 0,
      Senior_SkinnySingles_RankOutOf_WithinSkill: 0,
      Senior_SkinnySingles_Rank: 0,
      Senior_SkinnySingles_RankOutOf: 0,
      Senior_SkinnySingles_FutureRating: 0,
      Senior_SkinnySingles_FutureSkill: 0,
      Senior_SkinnySingles_FutureRank: 0,
      Senior_SkinnySingles_FutureRankOutOf: 0,
      U50_Doubles_NumberOfGames: 0,
      U50_Doubles_Skill: 0,
      U50_Doubles_Rating: 0,
      U50_Doubles_Rank_WithinSkill: 0,
      U50_Doubles_RankOutOf_WithinSkill: 0,
      U50_Doubles_Rank: 0,
      U50_Doubles_RankOutOf: 0,
      U50_Doubles_FutureRating: 0,
      U50_Doubles_FutureSkill: 0,
      U50_Doubles_FutureRank: 0,
      U50_Doubles_FutureRankOutOf: 0,
      U50_Mix_NumberOfGames: 0,
      U50_Mix_Skill: 0,
      U50_Mix_Rating: 0,
      U50_Mix_Rank_WithinSkill: 0,
      U50_Mix_RankOutOf_WithinSkill: 0,
      U50_Mix_Rank: 0,
      U50_Mix_RankOutOf: 0,
      U50_Mix_FutureRating: 0,
      U50_Mix_FutureSkill: 0,
      U50_Mix_FutureRank: 0,
      U50_Mix_FutureRankOutOf: 0,
      U50_Singles_NumberOfGames: 0,
      U50_Singles_Skill: 0,
      U50_Singles_Rating: 0,
      U50_Singles_Rank_WithinSkill: 0,
      U50_Singles_RankOutOf_WithinSkill: 0,
      U50_Singles_Rank: 0,
      U50_Singles_RankOutOf: 0,
      U50_Singles_FutureRating: 0,
      U50_Singles_FutureSkill: 0,
      U50_Singles_FutureRank: 0,
      U50_Singles_FutureRankOutOf: 0,
      U50_SkinnySingles_NumberOfGames: 0,
      U50_SkinnySingles_Skill: 0,
      U50_SkinnySingles_Rating: 0,
      U50_SkinnySingles_Rank_WithinSkill: 0,
      U50_SkinnySingles_RankOutOf_WithinSkill: 0,
      U50_SkinnySingles_Rank: 0,
      U50_SkinnySingles_RankOutOf: 0,
      U50_SkinnySingles_FutureRating: 0,
      U50_SkinnySingles_FutureSkill: 0,
      U50_SkinnySingles_FutureRank: 0,
      U50_SkinnySingles_FutureRankOutOf: 0,
    },
  },
  {
    dupr: {
      id: 4709183167,
      fullName: 'Alexandre Gagne',
      shortAddress: 'Sherbrooke, QC, CA',
      gender: 'MALE',
      age: 48,
      ratings: {
        singles: 'NR',
        singlesVerified: 'NR',
        singlesProvisional: false,
        singlesReliabilityScore: 0,
        doubles: '4.927',
        doublesVerified: 'NR',
        doublesProvisional: false,
        doublesReliabilityScore: 85,
        defaultRating: 'DOUBLES',
      },
      enablePrivacy: false,
      isPlayer1: true,
      verifiedEmail: true,
      registrationType: 'INVITATION',
      registered: true,
      duprId: '7D2ZYN',
      showRatingBanner: false,
      status: 'ACTIVE',
      sponsor: {},
      lucraConnected: false,
    },
    ctpr: {
      UseSeniorAndU50: '0',
      UserID: 'E8BD1FE9-86FD-4C57-B75D-72B78969A438',
      FirstName: 'Alexandre',
      LastName: 'Gagné',
      NameSuffix: '',
      City: 'Sherbrooke',
      State_Abbreviation: 'QC',
      State_Title: 'Quebec',
      Country_Abbreviation: 'CAN',
      Country_Title: 'Canada',
      Nickname: 'The Cat',
      Gender: 'M',
      Height_Feet: '6',
      Height_Inches: '0',
      Handed: 'RT',
      ShowAgeToPublic: '1',
      ShowCityToPublic: '1',
      ShowStateToPublic: '1',
      ShowOnlyFirstInitialOfLastNameToPublic: '0',
      ProfileImage: '',
      Age: '48',
      TotalGames: '244',
      TotalLeagues: '0',
      TotalClubs: '1',
      Ratings_GroupAllDoublesTogether: '0',
      DateUpdated: '5/1/2024 8:02:13 AM',
      DateFuture: '5/27/2024 7:06:19 AM',
      DateNextLiveUpdate: '7/1/2024 12:00:00 AM',
      TourneyID_PlayingInRightNow: '',
      TourneyTitle_PlayingInRightNow: '',
      Overall_Doubles_NumberOfGames: 105,
      Overall_Doubles_Skill: 4.5,
      Overall_Doubles_Rating: 4.9919328316870013,
      Overall_Doubles_Rank_WithinSkill: 0,
      Overall_Doubles_RankOutOf_WithinSkill: 0,
      Overall_Doubles_Rank: 0,
      Overall_Doubles_RankOutOf: 0,
      Overall_Doubles_FutureRating: 4.9919328316870013,
      Overall_Doubles_FutureSkill: 4.5,
      Overall_Doubles_FutureRank: 0,
      Overall_Doubles_FutureRankOutOf: 0,
      Overall_Mix_NumberOfGames: 83,
      Overall_Mix_Skill: 4.5,
      Overall_Mix_Rating: 4.7524284909813,
      Overall_Mix_Rank_WithinSkill: 0,
      Overall_Mix_RankOutOf_WithinSkill: 0,
      Overall_Mix_Rank: 0,
      Overall_Mix_RankOutOf: 0,
      Overall_Mix_FutureRating: 4.7524284909813,
      Overall_Mix_FutureSkill: 4.5,
      Overall_Mix_FutureRank: 0,
      Overall_Mix_FutureRankOutOf: 0,
      Overall_Singles_NumberOfGames: 47,
      Overall_Singles_Skill: 4.5,
      Overall_Singles_Rating: 4.6558003838822017,
      Overall_Singles_Rank_WithinSkill: 0,
      Overall_Singles_RankOutOf_WithinSkill: 0,
      Overall_Singles_Rank: 0,
      Overall_Singles_RankOutOf: 0,
      Overall_Singles_FutureRating: 4.6558003838822017,
      Overall_Singles_FutureSkill: 4.5,
      Overall_Singles_FutureRank: 0,
      Overall_Singles_FutureRankOutOf: 0,
      Overall_SkinnySingles_NumberOfGames: 9,
      Overall_SkinnySingles_Skill: 4.0,
      Overall_SkinnySingles_Rating: 4.2655926932280011,
      Overall_SkinnySingles_Rank_WithinSkill: 0,
      Overall_SkinnySingles_RankOutOf_WithinSkill: 0,
      Overall_SkinnySingles_Rank: 0,
      Overall_SkinnySingles_RankOutOf: 0,
      Overall_SkinnySingles_FutureRating: 4.2655926932280011,
      Overall_SkinnySingles_FutureSkill: 4.0,
      Overall_SkinnySingles_FutureRank: 0,
      Overall_SkinnySingles_FutureRankOutOf: 0,
      Senior_Doubles_NumberOfGames: 0,
      Senior_Doubles_Skill: 0,
      Senior_Doubles_Rating: 0,
      Senior_Doubles_Rank_WithinSkill: 0,
      Senior_Doubles_RankOutOf_WithinSkill: 0,
      Senior_Doubles_Rank: 0,
      Senior_Doubles_RankOutOf: 0,
      Senior_Doubles_FutureRating: 0,
      Senior_Doubles_FutureSkill: 0,
      Senior_Doubles_FutureRank: 0,
      Senior_Doubles_FutureRankOutOf: 0,
      Senior_Mix_NumberOfGames: 0,
      Senior_Mix_Skill: 0,
      Senior_Mix_Rating: 0,
      Senior_Mix_Rank_WithinSkill: 0,
      Senior_Mix_RankOutOf_WithinSkill: 0,
      Senior_Mix_Rank: 0,
      Senior_Mix_RankOutOf: 0,
      Senior_Mix_FutureRating: 0,
      Senior_Mix_FutureSkill: 0,
      Senior_Mix_FutureRank: 0,
      Senior_Mix_FutureRankOutOf: 0,
      Senior_Singles_NumberOfGames: 0,
      Senior_Singles_Skill: 0,
      Senior_Singles_Rating: 0,
      Senior_Singles_Rank_WithinSkill: 0,
      Senior_Singles_RankOutOf_WithinSkill: 0,
      Senior_Singles_Rank: 0,
      Senior_Singles_RankOutOf: 0,
      Senior_Singles_FutureRating: 0,
      Senior_Singles_FutureSkill: 0,
      Senior_Singles_FutureRank: 0,
      Senior_Singles_FutureRankOutOf: 0,
      Senior_SkinnySingles_NumberOfGames: 0,
      Senior_SkinnySingles_Skill: 0,
      Senior_SkinnySingles_Rating: 0,
      Senior_SkinnySingles_Rank_WithinSkill: 0,
      Senior_SkinnySingles_RankOutOf_WithinSkill: 0,
      Senior_SkinnySingles_Rank: 0,
      Senior_SkinnySingles_RankOutOf: 0,
      Senior_SkinnySingles_FutureRating: 0,
      Senior_SkinnySingles_FutureSkill: 0,
      Senior_SkinnySingles_FutureRank: 0,
      Senior_SkinnySingles_FutureRankOutOf: 0,
      U50_Doubles_NumberOfGames: 0,
      U50_Doubles_Skill: 0,
      U50_Doubles_Rating: 0,
      U50_Doubles_Rank_WithinSkill: 0,
      U50_Doubles_RankOutOf_WithinSkill: 0,
      U50_Doubles_Rank: 0,
      U50_Doubles_RankOutOf: 0,
      U50_Doubles_FutureRating: 0,
      U50_Doubles_FutureSkill: 0,
      U50_Doubles_FutureRank: 0,
      U50_Doubles_FutureRankOutOf: 0,
      U50_Mix_NumberOfGames: 0,
      U50_Mix_Skill: 0,
      U50_Mix_Rating: 0,
      U50_Mix_Rank_WithinSkill: 0,
      U50_Mix_RankOutOf_WithinSkill: 0,
      U50_Mix_Rank: 0,
      U50_Mix_RankOutOf: 0,
      U50_Mix_FutureRating: 0,
      U50_Mix_FutureSkill: 0,
      U50_Mix_FutureRank: 0,
      U50_Mix_FutureRankOutOf: 0,
      U50_Singles_NumberOfGames: 0,
      U50_Singles_Skill: 0,
      U50_Singles_Rating: 0,
      U50_Singles_Rank_WithinSkill: 0,
      U50_Singles_RankOutOf_WithinSkill: 0,
      U50_Singles_Rank: 0,
      U50_Singles_RankOutOf: 0,
      U50_Singles_FutureRating: 0,
      U50_Singles_FutureSkill: 0,
      U50_Singles_FutureRank: 0,
      U50_Singles_FutureRankOutOf: 0,
      U50_SkinnySingles_NumberOfGames: 0,
      U50_SkinnySingles_Skill: 0,
      U50_SkinnySingles_Rating: 0,
      U50_SkinnySingles_Rank_WithinSkill: 0,
      U50_SkinnySingles_RankOutOf_WithinSkill: 0,
      U50_SkinnySingles_Rank: 0,
      U50_SkinnySingles_RankOutOf: 0,
      U50_SkinnySingles_FutureRating: 0,
      U50_SkinnySingles_FutureSkill: 0,
      U50_SkinnySingles_FutureRank: 0,
      U50_SkinnySingles_FutureRankOutOf: 0,
    },
  },
  {
    dupr: {
      id: 7054876467,
      fullName: 'Ivan Di Capua',
      firstName: 'Ivan',
      lastName: 'Di Capua',
      shortAddress: 'Saint-Lazare, QC, CA',
      gender: 'MALE',
      age: 36,
      hand: 'LEFT',
      imageUrl:
        'https://dupr.s3.us-east-1.amazonaws.com/images/99c502c2-49a9-4d62-829b-f13ea58ebf3f.jpg',
      ratings: {
        singles: '4.261',
        singlesVerified: 'NR',
        singlesProvisional: false,
        singlesReliabilityScore: 82,
        doubles: '4.329',
        doublesVerified: 'NR',
        doublesProvisional: false,
        doublesReliabilityScore: 67,
        defaultRating: 'DOUBLES',
      },
      enablePrivacy: false,
      isPlayer1: true,
      verifiedEmail: true,
      registered: true,
      duprId: '3YZE4E',
      showRatingBanner: false,
      status: 'ACTIVE',
      sponsor: {},
      lucraConnected: false,
    },
    ctpr: {
      UseSeniorAndU50: '0',
      UserID: 'F3C80ACB-6B48-46FC-9AC9-1D22E6EF0586',
      FirstName: 'Ivan',
      LastName: 'Di Capua',
      NameSuffix: '',
      City: '',
      State_Abbreviation: '',
      State_Title: '',
      Country_Abbreviation: 'CAN',
      Country_Title: 'Canada',
      Nickname: '',
      Gender: 'M',
      Height_Feet: '0',
      Height_Inches: '0',
      Handed: 'LT',
      ShowAgeToPublic: '1',
      ShowCityToPublic: '0',
      ShowStateToPublic: '0',
      ShowOnlyFirstInitialOfLastNameToPublic: '0',
      ProfileImage: '',
      Age: '36',
      TotalGames: '81',
      TotalLeagues: '0',
      TotalClubs: '1',
      Ratings_GroupAllDoublesTogether: '0',
      DateUpdated: '5/1/2024 8:02:13 AM',
      DateFuture: '5/27/2024 7:06:19 AM',
      DateNextLiveUpdate: '7/1/2024 12:00:00 AM',
      TourneyID_PlayingInRightNow: '',
      TourneyTitle_PlayingInRightNow: '',
      Overall_Doubles_NumberOfGames: 36,
      Overall_Doubles_Skill: 4.0,
      Overall_Doubles_Rating: 4.109963500098603,
      Overall_Doubles_Rank_WithinSkill: 0,
      Overall_Doubles_RankOutOf_WithinSkill: 0,
      Overall_Doubles_Rank: 0,
      Overall_Doubles_RankOutOf: 0,
      Overall_Doubles_FutureRating: 4.109963500098603,
      Overall_Doubles_FutureSkill: 4.0,
      Overall_Doubles_FutureRank: 0,
      Overall_Doubles_FutureRankOutOf: 0,
      Overall_Mix_NumberOfGames: 10,
      Overall_Mix_Skill: 3.5,
      Overall_Mix_Rating: 3.7904290595469994,
      Overall_Mix_Rank_WithinSkill: 0,
      Overall_Mix_RankOutOf_WithinSkill: 0,
      Overall_Mix_Rank: 0,
      Overall_Mix_RankOutOf: 0,
      Overall_Mix_FutureRating: 3.7904290595469994,
      Overall_Mix_FutureSkill: 3.5,
      Overall_Mix_FutureRank: 0,
      Overall_Mix_FutureRankOutOf: 0,
      Overall_Singles_NumberOfGames: 35,
      Overall_Singles_Skill: 4.0,
      Overall_Singles_Rating: 4.222167529662002,
      Overall_Singles_Rank_WithinSkill: 0,
      Overall_Singles_RankOutOf_WithinSkill: 0,
      Overall_Singles_Rank: 0,
      Overall_Singles_RankOutOf: 0,
      Overall_Singles_FutureRating: 4.222167529662002,
      Overall_Singles_FutureSkill: 4.0,
      Overall_Singles_FutureRank: 0,
      Overall_Singles_FutureRankOutOf: 0,
      Overall_SkinnySingles_NumberOfGames: 0,
      Overall_SkinnySingles_Skill: 4.0,
      Overall_SkinnySingles_Rating: 4.25,
      Overall_SkinnySingles_Rank_WithinSkill: 0,
      Overall_SkinnySingles_RankOutOf_WithinSkill: 0,
      Overall_SkinnySingles_Rank: 0,
      Overall_SkinnySingles_RankOutOf: 0,
      Overall_SkinnySingles_FutureRating: 4.25,
      Overall_SkinnySingles_FutureSkill: 4.0,
      Overall_SkinnySingles_FutureRank: 0,
      Overall_SkinnySingles_FutureRankOutOf: 0,
      Senior_Doubles_NumberOfGames: 0,
      Senior_Doubles_Skill: 0,
      Senior_Doubles_Rating: 0,
      Senior_Doubles_Rank_WithinSkill: 0,
      Senior_Doubles_RankOutOf_WithinSkill: 0,
      Senior_Doubles_Rank: 0,
      Senior_Doubles_RankOutOf: 0,
      Senior_Doubles_FutureRating: 0,
      Senior_Doubles_FutureSkill: 0,
      Senior_Doubles_FutureRank: 0,
      Senior_Doubles_FutureRankOutOf: 0,
      Senior_Mix_NumberOfGames: 0,
      Senior_Mix_Skill: 0,
      Senior_Mix_Rating: 0,
      Senior_Mix_Rank_WithinSkill: 0,
      Senior_Mix_RankOutOf_WithinSkill: 0,
      Senior_Mix_Rank: 0,
      Senior_Mix_RankOutOf: 0,
      Senior_Mix_FutureRating: 0,
      Senior_Mix_FutureSkill: 0,
      Senior_Mix_FutureRank: 0,
      Senior_Mix_FutureRankOutOf: 0,
      Senior_Singles_NumberOfGames: 0,
      Senior_Singles_Skill: 0,
      Senior_Singles_Rating: 0,
      Senior_Singles_Rank_WithinSkill: 0,
      Senior_Singles_RankOutOf_WithinSkill: 0,
      Senior_Singles_Rank: 0,
      Senior_Singles_RankOutOf: 0,
      Senior_Singles_FutureRating: 0,
      Senior_Singles_FutureSkill: 0,
      Senior_Singles_FutureRank: 0,
      Senior_Singles_FutureRankOutOf: 0,
      Senior_SkinnySingles_NumberOfGames: 0,
      Senior_SkinnySingles_Skill: 0,
      Senior_SkinnySingles_Rating: 0,
      Senior_SkinnySingles_Rank_WithinSkill: 0,
      Senior_SkinnySingles_RankOutOf_WithinSkill: 0,
      Senior_SkinnySingles_Rank: 0,
      Senior_SkinnySingles_RankOutOf: 0,
      Senior_SkinnySingles_FutureRating: 0,
      Senior_SkinnySingles_FutureSkill: 0,
      Senior_SkinnySingles_FutureRank: 0,
      Senior_SkinnySingles_FutureRankOutOf: 0,
      U50_Doubles_NumberOfGames: 0,
      U50_Doubles_Skill: 0,
      U50_Doubles_Rating: 0,
      U50_Doubles_Rank_WithinSkill: 0,
      U50_Doubles_RankOutOf_WithinSkill: 0,
      U50_Doubles_Rank: 0,
      U50_Doubles_RankOutOf: 0,
      U50_Doubles_FutureRating: 0,
      U50_Doubles_FutureSkill: 0,
      U50_Doubles_FutureRank: 0,
      U50_Doubles_FutureRankOutOf: 0,
      U50_Mix_NumberOfGames: 0,
      U50_Mix_Skill: 0,
      U50_Mix_Rating: 0,
      U50_Mix_Rank_WithinSkill: 0,
      U50_Mix_RankOutOf_WithinSkill: 0,
      U50_Mix_Rank: 0,
      U50_Mix_RankOutOf: 0,
      U50_Mix_FutureRating: 0,
      U50_Mix_FutureSkill: 0,
      U50_Mix_FutureRank: 0,
      U50_Mix_FutureRankOutOf: 0,
      U50_Singles_NumberOfGames: 0,
      U50_Singles_Skill: 0,
      U50_Singles_Rating: 0,
      U50_Singles_Rank_WithinSkill: 0,
      U50_Singles_RankOutOf_WithinSkill: 0,
      U50_Singles_Rank: 0,
      U50_Singles_RankOutOf: 0,
      U50_Singles_FutureRating: 0,
      U50_Singles_FutureSkill: 0,
      U50_Singles_FutureRank: 0,
      U50_Singles_FutureRankOutOf: 0,
      U50_SkinnySingles_NumberOfGames: 0,
      U50_SkinnySingles_Skill: 0,
      U50_SkinnySingles_Rating: 0,
      U50_SkinnySingles_Rank_WithinSkill: 0,
      U50_SkinnySingles_RankOutOf_WithinSkill: 0,
      U50_SkinnySingles_Rank: 0,
      U50_SkinnySingles_RankOutOf: 0,
      U50_SkinnySingles_FutureRating: 0,
      U50_SkinnySingles_FutureSkill: 0,
      U50_SkinnySingles_FutureRank: 0,
      U50_SkinnySingles_FutureRankOutOf: 0,
    },
  },
  {
    dupr: {
      "id": 7170772491,
      "fullName": "Vincent Dubreuil",
      "shortAddress": "Granby, QC, CA",
      "gender": "MALE",
      "age": 35,
      "ratings": {
        "singles": "NR",
        "singlesVerified": "NR",
        "singlesProvisional": false,
        "singlesReliabilityScore": 0,
        "doubles": "4.102",
        "doublesVerified": "NR",
        "doublesProvisional": false,
        "doublesReliabilityScore": 7,
        "defaultRating": "DOUBLES"
      },
      "enablePrivacy": false,
      "isPlayer1": true,
      "verifiedEmail": true,
      "registered": true,
      "duprId": "6ZOQJK",
      "showRatingBanner": false,
      "status": "ACTIVE",
      "sponsor": {},
      "lucraConnected": false
    },
    ctpr: {
              "UseSeniorAndU50": "0",
              "UserID": "09F18108-D6C2-4680-83BE-D95E801696DE",
              "FirstName": "Vincent",
              "LastName": "Dubreuil",
              "NameSuffix": "",
              "City": "",
              "State_Abbreviation": "",
              "State_Title": "",
              "Country_Abbreviation": "CAN",
              "Country_Title": "Canada",
              "Nickname": "",
              "Gender": "M",
              "Height_Feet": "0",
              "Height_Inches": "0",
              "Handed": "RT",
              "ShowAgeToPublic": "1",
              "ShowCityToPublic": "0",
              "ShowStateToPublic": "0",
              "ShowOnlyFirstInitialOfLastNameToPublic": "0",
              "ProfileImage": "",
              "Age": "36",
              "TotalGames": "8",
              "TotalLeagues": "0",
              "TotalClubs": "1",
              "Ratings_GroupAllDoublesTogether": "0",
              "DateUpdated": "5/9/2024 2:29:23 PM",
              "DateFuture": "5/27/2024 7:06:19 AM",
              "DateNextLiveUpdate": "7/1/2024 12:00:00 AM",
              "TourneyID_PlayingInRightNow": "",
              "TourneyTitle_PlayingInRightNow": "",
              "Overall_Doubles_NumberOfGames": 8,
              "Overall_Doubles_Skill": 3.5,
              "Overall_Doubles_Rating": 3.9552489540420006,
              "Overall_Doubles_Rank_WithinSkill": 0,
              "Overall_Doubles_RankOutOf_WithinSkill": 0,
              "Overall_Doubles_Rank": 0,
              "Overall_Doubles_RankOutOf": 0,
              "Overall_Doubles_FutureRating": 4.153384136581,
              "Overall_Doubles_FutureSkill": 4.0,
              "Overall_Doubles_FutureRank": 0,
              "Overall_Doubles_FutureRankOutOf": 0,
              "Overall_Mix_NumberOfGames": 0,
              "Overall_Mix_Skill": 3.5,
              "Overall_Mix_Rating": 3.593361082749,
              "Overall_Mix_Rank_WithinSkill": 0,
              "Overall_Mix_RankOutOf_WithinSkill": 0,
              "Overall_Mix_Rank": 0,
              "Overall_Mix_RankOutOf": 0,
              "Overall_Mix_FutureRating": 3.593361082749,
              "Overall_Mix_FutureSkill": 3.5,
              "Overall_Mix_FutureRank": 0,
              "Overall_Mix_FutureRankOutOf": 0,
              "Overall_Singles_NumberOfGames": 0,
              "Overall_Singles_Skill": 3.5,
              "Overall_Singles_Rating": 3.75,
              "Overall_Singles_Rank_WithinSkill": 0,
              "Overall_Singles_RankOutOf_WithinSkill": 0,
              "Overall_Singles_Rank": 0,
              "Overall_Singles_RankOutOf": 0,
              "Overall_Singles_FutureRating": 3.75,
              "Overall_Singles_FutureSkill": 3.5,
              "Overall_Singles_FutureRank": 0,
              "Overall_Singles_FutureRankOutOf": 0,
              "Overall_SkinnySingles_NumberOfGames": 0,
              "Overall_SkinnySingles_Skill": 2.5,
              "Overall_SkinnySingles_Rating": 2.75,
              "Overall_SkinnySingles_Rank_WithinSkill": 0,
              "Overall_SkinnySingles_RankOutOf_WithinSkill": 0,
              "Overall_SkinnySingles_Rank": 0,
              "Overall_SkinnySingles_RankOutOf": 0,
              "Overall_SkinnySingles_FutureRating": 2.75,
              "Overall_SkinnySingles_FutureSkill": 2.5,
              "Overall_SkinnySingles_FutureRank": 0,
              "Overall_SkinnySingles_FutureRankOutOf": 0,
              "Senior_Doubles_NumberOfGames": 0,
              "Senior_Doubles_Skill": 0,
              "Senior_Doubles_Rating": 0,
              "Senior_Doubles_Rank_WithinSkill": 0,
              "Senior_Doubles_RankOutOf_WithinSkill": 0,
              "Senior_Doubles_Rank": 0,
              "Senior_Doubles_RankOutOf": 0,
              "Senior_Doubles_FutureRating": 0,
              "Senior_Doubles_FutureSkill": 0,
              "Senior_Doubles_FutureRank": 0,
              "Senior_Doubles_FutureRankOutOf": 0,
              "Senior_Mix_NumberOfGames": 0,
              "Senior_Mix_Skill": 0,
              "Senior_Mix_Rating": 0,
              "Senior_Mix_Rank_WithinSkill": 0,
              "Senior_Mix_RankOutOf_WithinSkill": 0,
              "Senior_Mix_Rank": 0,
              "Senior_Mix_RankOutOf": 0,
              "Senior_Mix_FutureRating": 0,
              "Senior_Mix_FutureSkill": 0,
              "Senior_Mix_FutureRank": 0,
              "Senior_Mix_FutureRankOutOf": 0,
              "Senior_Singles_NumberOfGames": 0,
              "Senior_Singles_Skill": 0,
              "Senior_Singles_Rating": 0,
              "Senior_Singles_Rank_WithinSkill": 0,
              "Senior_Singles_RankOutOf_WithinSkill": 0,
              "Senior_Singles_Rank": 0,
              "Senior_Singles_RankOutOf": 0,
              "Senior_Singles_FutureRating": 0,
              "Senior_Singles_FutureSkill": 0,
              "Senior_Singles_FutureRank": 0,
              "Senior_Singles_FutureRankOutOf": 0,
              "Senior_SkinnySingles_NumberOfGames": 0,
              "Senior_SkinnySingles_Skill": 0,
              "Senior_SkinnySingles_Rating": 0,
              "Senior_SkinnySingles_Rank_WithinSkill": 0,
              "Senior_SkinnySingles_RankOutOf_WithinSkill": 0,
              "Senior_SkinnySingles_Rank": 0,
              "Senior_SkinnySingles_RankOutOf": 0,
              "Senior_SkinnySingles_FutureRating": 0,
              "Senior_SkinnySingles_FutureSkill": 0,
              "Senior_SkinnySingles_FutureRank": 0,
              "Senior_SkinnySingles_FutureRankOutOf": 0,
              "U50_Doubles_NumberOfGames": 0,
              "U50_Doubles_Skill": 0,
              "U50_Doubles_Rating": 0,
              "U50_Doubles_Rank_WithinSkill": 0,
              "U50_Doubles_RankOutOf_WithinSkill": 0,
              "U50_Doubles_Rank": 0,
              "U50_Doubles_RankOutOf": 0,
              "U50_Doubles_FutureRating": 0,
              "U50_Doubles_FutureSkill": 0,
              "U50_Doubles_FutureRank": 0,
              "U50_Doubles_FutureRankOutOf": 0,
              "U50_Mix_NumberOfGames": 0,
              "U50_Mix_Skill": 0,
              "U50_Mix_Rating": 0,
              "U50_Mix_Rank_WithinSkill": 0,
              "U50_Mix_RankOutOf_WithinSkill": 0,
              "U50_Mix_Rank": 0,
              "U50_Mix_RankOutOf": 0,
              "U50_Mix_FutureRating": 0,
              "U50_Mix_FutureSkill": 0,
              "U50_Mix_FutureRank": 0,
              "U50_Mix_FutureRankOutOf": 0,
              "U50_Singles_NumberOfGames": 0,
              "U50_Singles_Skill": 0,
              "U50_Singles_Rating": 0,
              "U50_Singles_Rank_WithinSkill": 0,
              "U50_Singles_RankOutOf_WithinSkill": 0,
              "U50_Singles_Rank": 0,
              "U50_Singles_RankOutOf": 0,
              "U50_Singles_FutureRating": 0,
              "U50_Singles_FutureSkill": 0,
              "U50_Singles_FutureRank": 0,
              "U50_Singles_FutureRankOutOf": 0,
              "U50_SkinnySingles_NumberOfGames": 0,
              "U50_SkinnySingles_Skill": 0,
              "U50_SkinnySingles_Rating": 0,
              "U50_SkinnySingles_Rank_WithinSkill": 0,
              "U50_SkinnySingles_RankOutOf_WithinSkill": 0,
              "U50_SkinnySingles_Rank": 0,
              "U50_SkinnySingles_RankOutOf": 0,
              "U50_SkinnySingles_FutureRating": 0,
              "U50_SkinnySingles_FutureSkill": 0,
              "U50_SkinnySingles_FutureRank": 0,
              "U50_SkinnySingles_FutureRankOutOf": 0
          }
  }
];
