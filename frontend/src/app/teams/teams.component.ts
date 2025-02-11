import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CarouselModule } from 'ngx-bootstrap/carousel';

interface Team {
  name: string;
  stadium: string;
  capacity: number;
  superBowls: number;
  famousPlayers: string[];
  logo: string;
  website: string;
}

@Component({
  selector: 'app-teams',
  imports: [CommonModule, CarouselModule, RouterModule],
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.scss']
})
export class TeamsComponent {
  teams: Team[] = [
    {
      name: 'New England Patriots',
      stadium: 'Gillette Stadium',
      capacity: 65656,
      superBowls: 6,
      famousPlayers: ['Tom Brady', 'Rob Gronkowski', 'Tedy Bruschi'],
      logo: 'assets/images/patriots.png',
      website: 'https://www.patriots.com',
    },
    { 
      name: 'Dallas Cowboys', 
      stadium: 'AT&T Stadium', 
      capacity: 80000,
      superBowls: 5,
      famousPlayers: ['Emmitt Smith', 'Troy Aikman', 'Michael Irvin'],
      logo: 'assets/images/cowboys.png', 
      website: 'https://www.dallascowboys.com',
    },
    { 
      name: 'Green Bay Packers', 
      stadium: 'Lambeau Field', 
      capacity: 81441,
      superBowls: 4,
      famousPlayers: ['Brett Favre', 'Aaron Rodgers', 'Reggie White'],
      logo: 'assets/images/packers.png', 
      website: 'https://www.packers.com'
    },
    { 
      name: 'Pittsburgh Steelers', 
      stadium: 'Heinz Field', 
      capacity: 68400,
      superBowls: 6,
      famousPlayers: ['Terry Bradshaw', 'Joe Greene', 'Ben Roethlisberger'],
      logo: 'assets/images/steelers.png', 
      website: 'https://www.steelers.com'
    },
    { 
      name: 'San Francisco 49ers', 
      stadium: 'Levi\'s Stadium', 
      capacity: 68500,
      superBowls: 5,
      famousPlayers: ['Joe Montana', 'Jerry Rice', 'Steve Young'],
      logo: 'assets/images/49ers.png', 
      website: 'https://www.49ers.com'
    },
    { 
      name: 'New York Giants', 
      stadium: 'MetLife Stadium', 
      capacity: 82500,
      superBowls: 4,
      famousPlayers: ['Lawrence Taylor', 'Eli Manning', 'Michael Strahan'],
      logo: 'assets/images/giants.png', 
      website: 'https://www.giants.com'
    },
    { 
      name: 'Denver Broncos', 
      stadium: 'Empower Field at Mile High', 
      capacity: 76125,
      superBowls: 3,
      famousPlayers: ['John Elway', 'Peyton Manning', 'Terrell Davis'],
      logo: 'assets/images/broncos.png', 
      website: 'https://www.denverbroncos.com'
    },
    { 
      name: 'Chicago Bears', 
      stadium: 'Soldier Field', 
      capacity: 61500,
      superBowls: 1,
      famousPlayers: ['Walter Payton', 'Cairo Santos', 'Caleb Williams'],
      logo: 'assets/images/bears.png',
      website: 'https://www.chicagobears.com'
    },
    { 
      name: 'Kansas City Chiefs', 
      stadium: 'Arrowhead Stadium', 
      capacity: 76416,
      superBowls: 2,
      famousPlayers: ['Patrick Mahomes', 'Derrick Thomas', 'Tony Gonzalez'],
      logo: 'assets/images/chiefs.png',
      website: 'https://www.chiefs.com'
    },
    { 
      name: 'Washington Commanders', 
      stadium: 'FedExField', 
      capacity: 82000,
      superBowls: 3,
      famousPlayers: ['Joe Theismann', 'John Riggins', 'Art Monk'],
      logo: 'assets/images/commanders.png',
      website: 'https://www.washingtonfootball.com'
    },
    { 
      name: 'Miami Dolphins', 
      stadium: 'Hard Rock Stadium', 
      capacity: 65326,
      superBowls: 2,
      famousPlayers: ['Dan Marino', 'Larry Csonka', 'Jason Taylor'],
      logo: 'assets/images/dolphins.png',
      website: 'https://www.miamidolphins.com'
    },
    { 
      name: 'Seattle Seahawks', 
      stadium: 'Lumen Field', 
      capacity: 68500,
      superBowls: 1,
      famousPlayers: ['Russell Wilson', 'Shaun Alexander', 'Steve Largent'],
      logo: 'assets/images/seahawks.png',
      website: 'https://www.seahawks.com'
    },
    { 
      name: 'Los Angeles Rams', 
      stadium: 'SoFi Stadium', 
      capacity: 70240,
      superBowls: 1,
      famousPlayers: ['Eric Dickerson', 'Jack Youngblood', 'Deacon Jones'],
      logo: 'assets/images/rams.png',
      website: 'https://www.therams.com'
    },
    { 
      name: 'Minnesota Vikings', 
      stadium: 'U.S. Bank Stadium', 
      capacity: 66655,
      superBowls: 0,
      famousPlayers: ['Fran Tarkenton', 'Randy Moss', 'Adrian Peterson'],
      logo: 'assets/images/vikings.png',
      website: 'https://www.vikings.com'
    },
    { 
      name: 'Indianapolis Colts', 
      stadium: 'Lucas Oil Stadium', 
      capacity: 67000,
      superBowls: 2,
      famousPlayers: ['Peyton Manning', 'Marvin Harrison', 'Dwight Freeney'],
      logo: 'assets/images/colts.png',
      website: 'https://www.colts.com'
    },
    { 
      name: 'Tampa Bay Buccaneers', 
      stadium: 'Raymond James Stadium', 
      capacity: 65890,
      superBowls: 2,
      famousPlayers: ['Derrick Brooks', 'Warren Sapp', 'Ronde Barber'],
      logo: 'assets/images/buccaneers.png',
      website: 'https://www.buccaneers.com'
    },
    { 
      name: 'Philadelphia Eagles',
      stadium: 'Lincoln Financial Field',
      capacity: 69000,
      superBowls: 1,
      famousPlayers: ['Reggie White', 'Brian Dawkins', 'Donovan McNabb'],
      logo: 'assets/images/eagles.png',
      website: 'https://www.philadelphiaeagles.com'
    },
    { 
      name: 'New Orleans Saints', 
      stadium: 'Caesars Superdome', 
      capacity: 73208,
      superBowls: 1,
      famousPlayers: ['Drew Brees', 'Rickey Jackson', 'Archie Manning'],
      logo: 'assets/images/saints.png',
      website: 'https://www.neworleanssaints.com'
    },
    { 
      name: 'Cleveland Browns', 
      stadium: 'FirstEnergy Stadium', 
      capacity: 67895,
      superBowls: 0,
      famousPlayers: ['Jim Brown', 'Otto Graham', 'Ozzie Newsome'],
      logo: 'assets/images/browns.png',
      website: 'https://www.clevelandbrowns.com'
    },
    { 
      name: 'Buffalo Bills', 
      stadium: 'Highmark Stadium', 
      capacity: 71608,
      superBowls: 0,
      famousPlayers: ['Jim Kelly', 'Bruce Smith', 'Thurman Thomas'],
      logo: 'assets/images/bills.png',
      website: 'https://www.buffalobills.com'
    },
    { 
      name: 'Arizona Cardinals', 
      stadium: 'State Farm Stadium', 
      capacity: 63400,
      superBowls: 0,
      famousPlayers: ['Larry Fitzgerald', 'Kurt Warner', 'Pat Tillman'],
      logo: 'assets/images/cardinals.png',
      website: 'https://www.azcardinals.com'
    },
    { 
      name: 'Las Vegas Raiders', 
      stadium: 'Allegiant Stadium', 
      capacity: 65000,
      superBowls: 3,
      famousPlayers: ['Marcus Allen', 'Howie Long', 'Tim Brown'],
      logo: 'assets/images/raiders.png',
      website: 'https://www.raiders.com'
    },
    { 
      name: 'Detroit Lions', 
      stadium: 'Ford Field', 
      capacity: 65000,
      superBowls: 0,
      famousPlayers: ['Barry Sanders', 'Calvin Johnson', 'Matthew Stafford'],
      logo: 'assets/images/lions.png',
      website: 'https://www.detroitlions.com'
    },
    { 
      name: 'Atlanta Falcons', 
      stadium: 'Mercedes-Benz Stadium',
      capacity: 71000,
      superBowls: 0,
      famousPlayers: ['Deion Sanders', 'Michael Vick', 'Julio Jones'],
      logo: 'assets/images/falcons.png',
      website: 'https://www.atlantafalcons.com'
    },
    { 
      name: 'Carolina Panthers', 
      stadium: 'Bank of America Stadium', 
      capacity: 75466,
      superBowls: 0,
      famousPlayers: ['Steve Smith', 'Julius Peppers', 'Luke Kuechly'],
      logo: 'assets/images/panthers.png',
      website: 'https://www.panthers.com'
    },
    { 
      name: 'Cincinnati Bengals', 
      stadium: 'Paul Brown Stadium', 
      capacity: 65515,
      superBowls: 0,
      famousPlayers: ['Anthony Munoz', 'Chad Johnson', 'Ken Anderson'],
      logo: 'assets/images/bengals.png',
      website: 'https://www.bengals.com'
    },
    { 
      name: 'Jacksonville Jaguars', 
      stadium: 'TIAA Bank Field', 
      capacity: 67246,
      superBowls: 0,
      famousPlayers: ['Tony Boselli', 'Maurice Jones-Drew', 'Fred Taylor'],
      logo: 'assets/images/jaguars.png',
      website: 'https://www.jaguars.com'
    },
    { 
      name: 'Houston Texans', 
      stadium: 'NRG Stadium', 
      capacity: 72220,
      superBowls: 0,
      famousPlayers: ['J.J. Watt', 'Andre Johnson', 'DeAndre Hopkins'],
      logo: 'assets/images/texans.png',
      website: 'https://www.houstontexans.com'
    },
    { 
      name: 'Tennessee Titans', 
      stadium: 'Nissan Stadium', 
      capacity: 69143,
      superBowls: 0,
      famousPlayers: ['Steve McNair', 'Eddie George', 'Jevon Kearse'],
      logo: 'assets/images/titans.png',
      website: 'https://www.tennesseetitans.com'
    },
    { 
      name: 'New York Jets', 
      stadium: 'MetLife Stadium', 
      capacity: 82500,
      superBowls: 1,
      famousPlayers: ['Joe Namath', 'Curtis Martin', 'Darrelle Revis'],
      logo: 'assets/images/jets.png',
      website: 'https://www.newyorkjets.com'
    },
    { 
      name: 'Los Angeles Chargers',
      stadium: 'SoFi Stadium',
      capacity: 70240,
      superBowls: 0,
      famousPlayers: ['LaDainian Tomlinson', 'Philip Rivers', 'Antonio Gates'],
      logo: 'assets/images/chargers.png',
      website: 'https://www.chargers.com'
    },
    { 
      name: 'Baltimore Ravens', 
      stadium: 'M&T Bank Stadium', 
      capacity: 71008,
      superBowls: 2,
      famousPlayers: ['Ray Lewis', 'Ed Reed', 'Jonathan Ogden'],
      logo: 'assets/images/ravens.png',
      website: 'https://www.baltimoreravens.com'
    }
  ];
}
