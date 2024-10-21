export type User = {
  /**
   * Id generata dal database
   */
  _id: string;
  /**
   * Nome
   */
  firstName: string;
  /**
   * cognome
   */
  lastName: string;
  /**
   * email utilizzata per l'autenticazione
   */
  email: string;
  /**
   * password usata per l'autenticazione
   */
  password: string;
  /**
   * data di registrazione
   */
  created_at:string;
  /**
   * ultima modifica
   */
  updated_at: string;
  /**
   * role può assumere i valori:
   * -admin
   * -teacher
   * -student
   */
  role:Role;
  /**
   * rappresenta i corsi assegnati a un docente. Questa proprietà è valorizzata SOLO per i "role" teacher
   */
  subjects?: string[];
  image?: string;
  /**
   * rappresenta le classi assegnate ad un DOCENTE. è valorizzata SOLO per i "role" teacher
   */
  classes?:string[];
  /**
   * rappresenta la classe a cui uno  studente appartiene. è valorizzata SOLO per i "role" students
   */
  student_class?:string;
};


export type Role="admin" |"teacher"|"student";