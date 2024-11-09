
import styles from "@/styles/wiki_style/WikiHome.module.css";
import Header from '@/pages/share/header';
import Footer from '@/pages/share/footer';
import Image from "next/image";
import { useState,useEffect } from "react";
// import SideBar from '@/pages/share/sidebar';

export default function WikiHome() {
  type mobsType = {
    id: number,
    mob_name: string,
    mob_hp: number,
    mob_dmg: number | null,
    mob_xp: number | null,
    drop_item_name_01: string | null,
    drop_item_name_03: string | null,
    drop_item_name_02: string | null,
    drop_item_min_max_01: string | null,
    drop_item_min_max_02: string | null,
    drop_item_min_max_03: string | null,
    drop_item_probability_01: string | null,
    drop_item_probability_02: string | null,
    drop_item_probability_03: string | null,
    mob_detail: string | null,
    drop_item_url_01: string | null,
    drop_item_url_02: string | null,
    drop_item_url_03: string | null,
    mob_image_url: string | null,
    mob_faction:string | null,
  }

  const [mobs, setMobs] = useState<mobsType[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/get-data');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const result = await response.json();
        setMobs(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  console.log(mobs);



  return (
    <>
      <Header />
      <div className={styles.wiki_home}>
        <h1 className={styles.wiki_main_title}>Unique Mobs</h1>
        <p className={styles.wiki_subtitle}>サレジオサーバーに生息する<span className={styles.wiki_living}>固有生物</span></p>

        <div className={styles.wiki_longline}></div>
        <div className={styles.wiki_cards}>

          {
            mobs.map((mob, index) => (
              <div className={styles.wiki_card} key={index}>
                <div className={styles.wiki_card_contents}>

                  {
                    mob.mob_image_url ?
                    <Image
                    className={styles.wiki_mob_image}
                    src={mob.mob_image_url}
                    alt="Mob001"
                    width={108}
                    height={180}
                    priority
                    /> : ''
                  }

                  <div className={styles.wiki_mob_info}>
                    <h2 className={styles.wiki_mob_name}>{mob.mob_name}</h2>
                    <div className={styles.wiki_mob_status}>
                      <div className={styles.wiki_mob_status_group}>
                        <Image
                          // className={styles.wiki_mob_image}
                          src="/hp_icon.png"
                          alt="hp"
                          width={30}
                          height={30}
                          priority
                        />
                        <span className={styles.wiki_mob_status_points}>{mob.mob_hp || 0}</span>
                        <span className={styles.wiki_mob_status_points}>HP</span>
                      </div>

                      <div className={styles.wiki_mob_status_group}>
                        <Image
                          // className={styles.wiki_mob_image}
                          src="/damage_icon.png"
                          alt="damages"
                          width={30}
                          height={30}
                          priority
                        />
                        <span className={styles.wiki_mob_status_points}>{mob.mob_dmg || 0}</span>
                        <span className={styles.wiki_mob_status_points}>DMG</span>
                      </div>

                      <div className={styles.wiki_mob_status_group}>
                        <Image
                          // className={styles.wiki_mob_image}
                          src="/xp_icon.png"
                          alt="xp"
                          width={30}
                          height={30}
                          priority
                        />
                        <span className={styles.wiki_mob_status_points}>{mob.mob_xp || 0}</span>
                        <span className={styles.wiki_mob_status_points}>XP</span>
                      </div>
                    </div>
                  </div>

                  <div className={styles.wiki_mob_info}>
                    <h2 className={styles.wiki_mob_name}>Drops</h2>
                    <div className={styles.wiki_mob_status}>
                      <div className={styles.wiki_mob_status_group}>
                        {
                          mob.drop_item_url_01 && mob.drop_item_name_01 ?
                          <Image
                          // className={styles.wiki_mob_image}
                          src={mob.drop_item_url_01}
                          alt={mob.drop_item_name_01}
                          width={30}
                          height={30}
                          priority
                          /> : ''
                        }
                        <span className={styles.wiki_mob_status_points}>{mob.drop_item_name_01 || ''}</span>
                        <span className={styles.wiki_mob_status_points}>{mob.drop_item_min_max_01 || ''}</span>
                        <span className={styles.wiki_mob_status_points}>{mob.drop_item_probability_01 || ''}</span>
                      </div>

                      <div className={styles.wiki_mob_status_group}>
                        {
                          mob.drop_item_url_02 && mob.drop_item_name_02 ?
                          <Image
                          // className={styles.wiki_mob_image}
                          src={mob.drop_item_url_02}
                          alt={mob.drop_item_name_02}
                          width={30}
                          height={30}
                          priority
                          /> : ''
                        }
                        <span className={styles.wiki_mob_status_points}>{mob.drop_item_name_02 || ''}</span>
                        <span className={styles.wiki_mob_status_points}>{mob.drop_item_min_max_02 || ''}</span>
                        <span className={styles.wiki_mob_status_points}>{mob.drop_item_probability_02 || ''}</span>
                        </div>

                        <div className={styles.wiki_mob_status_group}>
                          {
                            mob.drop_item_url_03 && mob.drop_item_name_03 ?
                            <Image
                            // className={styles.wiki_mob_image}
                            src={mob.drop_item_url_03}
                            alt={mob.drop_item_name_03}
                            width={30}
                            height={30}
                            priority
                            /> : ''
                          }
                          <span className={styles.wiki_mob_status_points}>{mob.drop_item_name_03 || ''}</span>
                          <span className={styles.wiki_mob_status_points}>{mob.drop_item_min_max_03 || ''}</span>
                          <span className={styles.wiki_mob_status_points}>{mob.drop_item_probability_03 || ''}</span>
                        </div>
                    </div>
                  </div>
                </div>
                {/* <div className={styles.wiki_checkbox_button}>詳細を表示</div> */}
                <div className={styles.wiki_longline}></div>
              </div>
            ))
          }
        </div>
      </div>
      <Footer />
    </>
  );
}
