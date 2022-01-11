import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';                             // importirane
//import { HEROES } from '../mock-heroes';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  //test
  //num : 1|4|3 = 3;

  // hero: Hero = {
  //   id: 1,
  //   name: 'Windstorm'
  // };

  heroes: Hero[] = [];    // heroes stava prazen array ot tip Hero
  // selectedHero?: Hero;  // selected hero e ot tip Hero ; ? ne e zaduljitelen
  halfHeroes: Hero[] = []; // nov masiv sus 

  constructor(private heroService: HeroService, private messageService: MessageService) { }  // injection site ; definira se private heroService prop i e ot tip HeroService
  // definira se i nov messageService ot tip MessageService


  ngOnInit(): void {
    //this.num = 5;  // ne pozvolqva zaradi literal
    this.getHeroes();        // izvikva se metoda ot po-dolu; ne se pishe v constructora- toi e za malki inicializacii na danni i tn.
  }


  // onSelect(hero: Hero): void{    // metod definira prietite danni s ime hero i ot tip Hero
  //   this.selectedHero = hero;     // prietite danni s time hero stavat ravni na selectedHero
  //   this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`); // izvikva se metoda ot messageService i se dobavq string
  // }

  // getHeroes(): void {
  //   this.heroes = this.heroService.getHeroes();  // this.heroService.getHeroes(); e metod ot serviza (vzima mock-heroes datata)
  // }
  getHeroes(): void {
    this.heroService.getHeroes()  // this.heroService.getHeroes(); e metod ot serviza (vzima mock-heroes datata)
      .subscribe(heroes => {
        this.heroes = heroes
        this.halfHeroes = heroes.slice(0, 5); // slice of index
      }); // tuk se izchakva ovservable da emitne masiva ot herota- koeto moje d astane vednaga ili sled nqkolko minuti
    // izchakva se otgovora basically. Subscribe metoda vrushta emitnatiq masiv obratno kum callback-a , koeto setva heroes propertito (trqbva da vidq za arrow function)
  }



  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.heroService.addHero({ name } as Hero)
      .subscribe(hero => {
        this.heroes.push(hero);
      });
  }


  delete(hero: Hero): void {
    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroService.deleteHero(hero.id).subscribe();
  }


}