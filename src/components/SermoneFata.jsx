import React from "react";
import { screenshotOne, screenshotTwo } from "../assets";
import { Link } from "react-router-dom";

const SermoneFata = () => {
  return (
    <div className='w-full h-auto flex flex-col justify-start items-start gap-10'>
      <div className='flex-1 flex flex-col justify-start items-start gap-6'>
        <h2 className='text-zinc-800/90 dark:text-zinc-50/90 font-semibold font-montserrat'>
          Sermone fata
        </h2>
        <p className='w-full md:max-w-2xl text-zinc-800 dark:text-zinc-300/70 font-jost leading-[28px]'>
          Lorem markdownum, bracchia in redibam! Terque unda puppi nec, linguae
          posterior in utraque respicere candidus Mimasque formae; quae conantem
          cervice. Parcite variatus, redolentia adeunt. Tyrioque dies, naufraga
          sua adit partibus celanda torquere temptata, erit maneat et ramos,{" "}
          <Link
            to='/'
            className='text-teal-600 font-medium dark:text-teal-500 underline decoration-1 decoration-teal-800/80 hover:decoration-teal-500 inline-block mr-1'
          >
            iam{" "}
          </Link>
          ait dominari potitus! Tibi litora matremque fumantia condi radicibus
          opusque.
        </p>
        <p className='w-full md:max-w-2xl text-zinc-800 dark:text-zinc-300/70 font-jost leading-[28px]'>
          Deus feram verumque, fecit, ira tamen, terras per alienae victum.
          Mutantur levitate quas ubi arcum ripas oculos abest. Adest{" "}
          <Link
            to='/'
            className='text-teal-600 font-medium dark:text-teal-500 underline decoration-1 decoration-teal-800/80 hover:decoration-teal-500 inline-block mr-1'
          >
            commissaque victae{" "}
          </Link>{" "}
          in gemitus nectareis ire diva dotibus ora, et findi huic invenit;
          fatis? Fractaque dare superinposita nimiumque simulatoremque sanguine,
          at voce aestibus diu! Quid veterum hausit tu nil utinam paternos ima,
          commentaque.
        </p>
        <div className='w-full md:max-w-2xl h-auto rounded-2xl mb-10 ring-1 ring-zinc-400/10 hover:ring-zinc-600/10 dark:ring-zinc-700/40 dark:hover:ring-zinc-700/80 shadow-sm transition'>
          <img
            src={screenshotOne}
            alt='screenShot'
            className='rounded-2xl w-full h-full object-cover'
          />
        </div>
        <p className='w-full md:max-w-2xl text-zinc-800 dark:text-zinc-300/70 font-jost leading-[28px]'>
          Aere repetiti cognataque natus. Habebat vela solutis saepe munus
          nondum adhuc oscula nomina pignora corpus deserat.
        </p>
      </div>
      <div className='flex-1 flex flex-col justify-start items-start gap-6'>
        <h2 className='text-zinc-800/90 dark:text-zinc-50/90 font-semibold font-montserrat'>
          Lethaei Pindumve me quae dinumerat Pavor
        </h2>
        <div className='w-full md:max-w-2xl text-zinc-800 dark:text-zinc-300/70 font-jost leading-[28px]'>
          <p>
            Idem se saxa fata pollentibus geminos; quos pedibus. Est urnis
            Herses omnes nec divite: et ille illa furit sim verbis Cyllenius.
          </p>
          <ul className='list-decimal text-zinc-600 font-semibold dark:text-white/80 list-inside flex flex-col gap-2.5 my-6'>
            <li>
              <span className='font-normal text-zinc-800 dark:text-zinc-300/70 ml-5'>
                Captus inpleverunt collo
              </span>
            </li>
            <li>
              <span className='font-normal text-zinc-800 dark:text-zinc-300/70 ml-5'>
                Nec nam placebant
              </span>
            </li>
            <li>
              <span className='font-normal text-zinc-800 dark:text-zinc-300/70 ml-5'>
                Siquos vulgus
              </span>
            </li>
            <li>
              <span className='font-normal text-zinc-800 dark:text-zinc-300/70 ml-5'>
                Dictis carissime fugae
              </span>
            </li>
            <li>
              <span className='font-normal text-zinc-800 dark:text-zinc-300/70 ml-5'>
                A tacitos nulla viginti
              </span>
            </li>
          </ul>{" "}
          <p>
            Ungues fistula annoso, ille addit linoque motatque uberior verso{" "}
            <Link
              to='/'
              className='text-teal-600 font-medium dark:text-teal-500 underline decoration-1 decoration-teal-800/80 hover:decoration-teal-500 inline-block mr-1'
            >
              rubuerunt{" "}
            </Link>{" "}
            confine desuetaque. Sanguine anteit emerguntque expugnacior est
            pennas iniqui ecce{" "}
            <span className='text-zinc-800/90 dark:text-zinc-50/90 font-semibold font-montserrat'>
              haeret
            </span>{" "}
            genus: peiora imagine fossas Cephisos formosa! Refugitque amata{" "}
            <Link
              to='/'
              className='text-teal-600 font-medium dark:text-teal-500 underline decoration-1 decoration-teal-800/80 hover:decoration-teal-500 inline-block mr-1'
            >
              refelli{" "}
            </Link>{" "}
            supplex. Summa brevis vetuere tenebas, hostes vetantis, suppressit,
            arreptum regna. Postquam conpescit iuvenis habet corpus, et
            erratica, perdere, tot mota ars talis.
          </p>
        </div>
        <div className='w-full md:max-w-2xl h-auto rounded-2xl mb-10 ring-1 ring-zinc-400/10 hover:ring-zinc-600/10 dark:ring-zinc-700/40 dark:hover:ring-zinc-700/80 shadow-sm transition'>
          <img
            src={screenshotTwo}
            alt='screenShot'
            className='rounded-2xl w-full h-full object-cover'
          />
        </div>
        <p className='w-full md:max-w-2xl text-zinc-800 dark:text-zinc-300/70 font-jost leading-[28px]'>
          Aere repetiti cognataque natus. Habebat vela solutis saepe munus
          nondum adhuc oscula nomina pignora corpus deserat.
        </p>
      </div>
    </div>
  );
};

export default SermoneFata;
