import localFont from "next/font/local";
import styles from "@/styles/wiki_style/WikiHome.module.css";
import Header from '@/pages/share/header';
import Footer from '@/pages/share/footer';
import Image from "next/image";
// import SideBar from '@/pages/share/sidebar';

export default function WikiHome() {
  return (
    <>
      <Header />
      <div className={styles.wiki_home}>
        <h1 className={styles.wiki_main_title}>Unique Mobs</h1>
        <p className={styles.wiki_subtitle}>サレジオサーバーに生息する<span className={styles.wiki_enemy}>敵対生物</span></p>

        <div className={styles.wiki_longline}></div>

        <div className={styles.wiki_cards}>

          <div className={styles.wiki_card}>
            <Image
              className={styles.wiki_mob_image}
              src="/mobs001.png"
              alt="Mob001"
              width={135}
              height={226}
              priority
            />
            <div className={styles.wiki_mob_info}>
              <h2 className={styles.wiki_mob_name}>Spell Zombie</h2>
              <div className={styles.wiki_mob_status}>
                <div className={styles.wiki_mob_status_group}>
                  <Image
                    className={styles.wiki_mob_image}
                    src="/hp_icon.png"
                    alt="hp"
                    width={30}
                    height={30}
                    priority
                  />
                  <span className={styles.wiki_mob_status_points}>10.0</span>
                  <span className={styles.wiki_mob_status_points}>HP</span>
                </div>

                <div className={styles.wiki_mob_status_group}>
                  <Image
                    className={styles.wiki_mob_image}
                    src="/damage_icon.png"
                    alt="damages"
                    width={30}
                    height={30}
                    priority
                  />
                  <span className={styles.wiki_mob_status_points}>4.0</span>
                  <span className={styles.wiki_mob_status_points}>DMG</span>
                </div>

                <div className={styles.wiki_mob_status_group}>
                  <Image
                    className={styles.wiki_mob_image}
                    src="/xp_icon.png"
                    alt="xp"
                    width={30}
                    height={30}
                    priority
                  />
                  <span className={styles.wiki_mob_status_points}>30.0</span>
                  <span className={styles.wiki_mob_status_points}>XP</span>
                </div>
              </div>
            </div>

            <div className={styles.wiki_mob_info}>
              <h2 className={styles.wiki_mob_name}>Drops</h2>
              <div className={styles.wiki_mob_status}>
                <div className={styles.wiki_mob_status_group}>
                  <Image
                    className={styles.wiki_mob_image}
                    src="/drops001.png"
                    alt="Drops"
                    width={30}
                    height={30}
                    priority
                  />
                  <span className={styles.wiki_mob_status_points}>BLAZE_LOD</span>
                  <span className={styles.wiki_mob_status_points}>1~2</span>
                </div>

                <div className={styles.wiki_mob_status_group}>
                  <Image
                    className={styles.wiki_mob_image}
                    src="/drops001.png"
                    alt="Drops"
                    width={30}
                    height={30}
                    priority
                  />
                  <span className={styles.wiki_mob_status_points}>BLAZE_LOD</span>
                  <span className={styles.wiki_mob_status_points}>1~2</span>
                </div>

                <div className={styles.wiki_mob_status_group}>
                  <Image
                    className={styles.wiki_mob_image}
                    src="/drops001.png"
                    alt="Drops"
                    width={30}
                    height={30}
                    priority
                  />
                  <span className={styles.wiki_mob_status_points}>BLAZE_LOD</span>
                  <span className={styles.wiki_mob_status_points}>1~2</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
      <Footer />
    </>
  );
}
