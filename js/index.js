let mockData = [
        {
            "code": 12121212,
            "time": "2020-12-12 12:12:12"
        },
        {
            "code": 12121212,
            "time": "2020-12-12 12:12:12"
        },
        {
            "code": 12121212,
            "time": "2020-12-12 12:12:12"
        },
        {
            "code": 12121212,
            "time": "2020-12-12 12:12:12"
        },
        {
            "code": 12121212,
            "time": "2020-12-12 12:12:12"
        },
        {
            "code": 12121212,
            "time": "2020-12-12 12:12:12"
        },
        {
            "code": 12121212,
            "time": "2020-12-12 12:12:12"
        },
        {
            "code": 12121212,
            "time": "2020-12-12 12:12:12"
        },
        {
            "code": 12121212,
            "time": "2020-12-12 12:12:12"
        },
        {
            "code": 12121212,
            "time": "2020-12-12 12:12:12"
        },
        {
            "code": 12121212,
            "time": "2020-12-12 12:12:12"
        }
    ]
    let mockData2 = [
        {
            "code": 12121212,
            "add": "dfjfjdlfjlfj",
            "time": "2020-12-12 12:12:12"
        },
        {
            "code": 12121212,
            "add": "dfjfjdlfjlfj",
            "time": "2020-12-12 12:12:12"
        },
        {
            "code": 12121212,
            "add": "dfjfjdlfjlfj",
            "time": "2020-12-12 12:12:12"
        },
        {
            "code": 12121212,
            "add": "dfjfjdlfjlfj",
            "time": "2020-12-12 12:12:12"
        },
        {
            "code": 12121212,
            "add": "dfjfjdlfjlfj",
            "time": "2020-12-12 12:12:12"
        },
        {
            "code": 12121212,
            "add": "dfjfjdlfjlfj",
            "time": "2020-12-12 12:12:12"
        },
        {
            "code": 12121212,
            "add": "dfjfjdlfjlfj",
            "time": "2020-12-12 12:12:12"
        },
        {
            "code": 12121212,
            "add": "dfjfjdlfjlfj",
            "time": "2020-12-12 12:12:12"
        },
        {
            "code": 12121212,
            "add": "dfjfjdlfjlfj",
            "time": "2020-12-12 12:12:12"
        },
        {
            "code": 12121212,
            "add": "dfjfjdlfjlfj",
            "time": "2020-12-12 12:12:12"
        },
        {
            "code": 12121212,
            "add": "dfjfjdlfjlfj",
            "time": "2020-12-12 12:12:12"
        }
    ]

    let myTeamList = [
        {
            "code": 12121212,
            "time": "2020-12-12 12:12:12",
            "code2": 12121212,
            "code3": 12121212,
            "add": "0X123824875234 234ETUIOEUTOI"
        },
        {
            "code": 12121212,
            "time": "2020-12-12 12:12:12",
            "code2": 12121212,
            "code3": 12121212,
            "add": "0X123824875234 234ETUIOEUTOI"
        },
        {
            "code": 12121212,
            "time": "2020-12-12 12:12:12",
            "code2": 12121212,
            "code3": 12121212,
            "add": "0X123824875234 234ETUIOEUTOI"
        },
        {
            "code": 12121212,
            "time": "2020-12-12 12:12:12",
            "code2": 12121212,
            "code3": 12121212,
            "add": "0X123824875234 234ETUIOEUTOI"
        },
        {
            "code": 12121212,
            "time": "2020-12-12 12:12:12",
            "code2": 12121212,
            "code3": 12121212,
            "add": "0X123824875234 234ETUIOEUTOI"
        },
        {
            "code": 12121212,
            "time": "2020-12-12 12:12:12",
            "code2": 12121212,
            "code3": 12121212,
            "add": "0X123824875234 234ETUIOEUTOI"
        },
        {
            "code": 12121212,
            "time": "2020-12-12 12:12:12",
            "code2": 12121212,
            "code3": 12121212,
            "add": "0X123824875234 234ETUIOEUTOI"
        },
        {
            "code": 12121212,
            "time": "2020-12-12 12:12:12",
            "code2": 12121212,
            "code3": 12121212,
            "add": "0X123824875234 234ETUIOEUTOI"
        }
    ]
Mock.mock('/getData','get',mockData)
Mock.mock('/getData3','get',mockData2)
Mock.mock('/getMyTeam','get',myTeamList)