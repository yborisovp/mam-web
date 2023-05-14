import { Button } from "react-bootstrap";
import styles from "./item.module.scss";

export const ItemView = () => {
  return (
    <div
      className={
        styles.body + " d-flex justify-content-center align-items-center"
      }
    >
      <div className={styles.container + " container row d-flex"}>
        <div className={styles["sell-photos"] + " col-5"}>
          <div className="item__main">
            <img
              src="https://cdn.shopify.com/s/files/1/0163/6622/files/Screen_Shot_2019-06-07_at_7.40.24_PM_copy.jpg?v=1648162446"
              alt=""
              className={styles["item__main--image"]}
            />
          </div>
          <div className={styles["item__sub-images"] + " container"}>
            <div className={styles["item__sub-images--vert-container"]}>
              <div className={styles["item__sub-images--vert-container__main"]}>
                <img
                  src="https://cdn.motor1.com/images/mgl/RqJxK9/77:0:1244:934/koenigsegg-jesko-5.webp"
                  alt=""
                  className={
                    styles["item__sub-images--vert-container__main--image"]
                  }
                />
              </div>
              <div
                className={styles["item__sub-images--vert-container__vertical"]}
              >
                {[...Array(3)].map((x, i) => (
                  <img
                    src="https://cdn.shopify.com/s/files/1/0163/6622/files/Screen_Shot_2019-06-07_at_7.40.24_PM_copy.jpg?v=1648162446"
                    alt=""
                    key={i}
                    className={
                      styles[
                        "item__sub-images--vert-container__vertical--image"
                      ]
                    }
                  />
                ))}
              </div>
            </div>
            <div className={styles["item__sub-images--horizontal"]}>
              {[...Array(3)].map((x, i) => (
                <img
                  src="https://cdn.luxe.digital/media/20230105073805/fastest-cars-world-2023-list-ranking-luxe-digital.jpg"
                  alt=""
                  key={i}
                  className={styles["item__sub-images--horizontal__image"]}
                />
              ))}
            </div>
          </div>
        </div>
        <div className={styles["sell-item-info"] + " col-7"}>
          <div
            className={
              styles["item-title"] +
              " d-flex justify-content-between align-items-center align-content-center mb-3"
            }
          >
            <div className={styles["item-title__info"] + " mb-3"}>
              <div className={styles["item-title__info--price"] + " mb-3"}>
                1 100 000 ₽
              </div>
              <div className={styles["item-title__info--about"]}>
                <span
                  className={styles["item-title__info--about__title"] + " me-2"}
                >
                  2018, Audi Q3
                </span>
                <span className={styles["item-title__info--about__place"]}>
                  Таганрог, Ростовская область
                </span>
              </div>
              <div className={styles["item-title__info--tags"] + " d-flex"}>
                <div
                  className={styles["item-title__info--tags__tag"] + " me-2"}
                >
                  Хетчбек
                </div>
                <div
                  className={
                    styles["item-title__info--tags__separator"] + " me-2"
                  }
                ></div>
                <div
                  className={styles["item-title__info--tags__tag"] + " me-2"}
                >
                  125 л.с.
                </div>
                <div
                  className={
                    styles["item-title__info--tags__separator"] + " me-2"
                  }
                ></div>
                <div className={styles["item-title__info--tags__tag"]}></div>
              </div>
              <div
                className={
                  styles["item-title__info__contact"] +
                  "d-flex flex-column align-items-end "
                }
              >
                <div
                  className={
                    styles["item-title__info__contact--write-to-seller"] +
                    " mb-2"
                  }
                >
                  <i className="fa"></i>
                  <Button variant="primary">Написать</Button>
                </div>
                <div
                  className={
                    styles["item-title__info__contact--show-seller-number"]
                  }
                >
                  <i className="fa"></i>
                  <Button variant="success">Показать телефон</Button>
                </div>
              </div>
            </div>
          </div>
          <div className={styles["item-first-place-info"] + " mb-3"}>
            <div
              className={
                styles["item-first-place-info__block"] +
                " d-flex flex-column align-content-center"
              }
            >
              <div
                className={
                  styles["item-first-place-info__block--title"] + " text-center"
                }
              >
                123
              </div>
              <div
                className={
                  styles["item-first-place-info__block--additional-info"] +
                  " text-center"
                }
              >
                {" "}
                Просмотров за все время
              </div>
            </div>
            <div className={styles["item-first-place-info__separator"]}></div>
          </div>
          <div className={styles["item-spec"] + " mb-3"}>
            <div
              className={
                styles["item-spec__row"] + "d-flex justify-content-between"
              }
            >
              <div className={styles["item-spec__row--first-attribute"]}>
                Состояние
              </div>
              <div className={styles["item-spec__row--second-attribute"]}>
                Не битый
              </div>
            </div>
            <div className={styles["item-spec__separation"] + "mb-3"}></div>
          </div>
          <div className={styles["item-description"] + " mb-3"}>
            <div className={"item-description__title"}>Описание</div>
            <div className={styles["item-description__text"]}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis
              nostrum, incidunt consectetur magnam optio nobis veniam cum
              facilis exercitationem corrupti quisquam nulla numquam dignissimos
              at ipsum repellendus tempore. Eos, repudiandae. Consequuntur fugit
              perferendis labore, omnis minima iste fuga explicabo repellat amet
              minus. Sit nemo optio doloribus impedit omnis voluptatum esse
              similique quis dolorum! Ipsum repellat vero velit adipisci,
              blanditiis architecto! Maiores ducimus soluta dolores quae qui
              esse magnam nostrum nobis dolor velit molestiae voluptate
              blanditiis id, atque animi deleniti, laudantium ad, corrupti hic
              accusantium neque! Asperiores ullam dolor dolore ex. Cumque,
              labore explicabo. Quas aperiam quaerat explicabo hic doloremque.
              Quos mollitia odit eligendi repellendus beatae quo, architecto
              laboriosam hic autem, fuga praesentium reprehenderit harum,
              inventore dolor cumque voluptate nisi perferendis. Dolorum
              repudiandae officiis facere nostrum porro sit! Odit harum libero
              labore mollitia voluptatibus quaerat fugiat voluptatum ratione?
              Eos voluptas nulla natus est, nesciunt distinctio? Sapiente enim
              itaque cupiditate. Dolor, illum. Tempora similique architecto
              neque culpa, sunt ad, voluptates veniam doloremque, totam numquam
              fugit perspiciatis enim quia expedita repudiandae saepe facere
              dolorum asperiores provident labore odit. Molestiae labore
              suscipit quidem sit. Praesentium ab accusantium hic unde eius
              dignissimos magnam itaque expedita totam iusto nesciunt culpa,
              reprehenderit, ipsa quam quo ratione atque et id eos eaque
              consequatur ducimus quod. Beatae, sequi accusamus. Illo, fugiat ab
              doloremque autem alias sunt harum inventore doloribus dignissimos
              natus pariatur officia necessitatibus cum. Mollitia corrupti
              sapiente magnam ratione consequuntur doloribus reprehenderit?
              Molestiae aliquid minus culpa nisi nobis. Omnis iste, nobis nemo,
              deleniti rem neque natus cum reiciendis esse molestias maxime
              saepe sunt rerum quo molestiae quas enim dolorum laboriosam porro
              et reprehenderit alias eum. Saepe, aperiam soluta? Distinctio
              deserunt libero quae, nobis saepe officiis reprehenderit
              aspernatur illum, aut inventore dignissimos quasi tempora enim
              corporis placeat laboriosam ducimus praesentium minima repudiandae
              autem corrupti. Aspernatur sint debitis eum cupiditate. Deserunt
              quis autem molestiae, impedit blanditiis sapiente eveniet vel
              cumque nam est reiciendis, ducimus, non ullam. Deserunt eveniet
              saepe reprehenderit officiis amet fugit repellendus quos, earum
              exercitationem recusandae commodi totam! Molestiae rem reiciendis
              iusto similique iure. Possimus aliquid sequi aliquam doloremque,
              ullam officia unde ut? Labore nulla veritatis perspiciatis est
              rerum? Nemo veritatis fugiat cum repellendus officiis tempore et
              facilis. Aspernatur voluptatum quas, praesentium velit pariatur
              eaque tempora consectetur perferendis quam magnam ullam inventore
              repudiandae! Repudiandae optio tenetur expedita beatae ab numquam
              reiciendis repellendus, corrupti odit neque delectus. Totam,
              voluptate! Nostrum obcaecati cumque pariatur, praesentium natus,
              qui laboriosam culpa repudiandae reiciendis sit voluptas. Nihil
              debitis facilis nostrum laudantium blanditiis rerum minima officia
              sequi consequuntur suscipit? Provident perspiciatis dolore
              distinctio iusto? Maiores hic dignissimos, alias perferendis
              libero sed incidunt, vitae iste ipsam magni quas amet at ut
              sapiente quo pariatur quaerat voluptas quod! Consectetur officia,
              cumque quibusdam laudantium ad voluptates nobis? Hic est enim
              asperiores numquam quos assumenda doloribus aliquam debitis
              dolore, beatae, ut repellat libero? Obcaecati earum explicabo
              praesentium aliquam eligendi voluptate, culpa sint quia. Cum
              deserunt accusamus itaque cumque! Delectus voluptatem laborum ad
              voluptatum veritatis, eligendi vel asperiores nostrum. Ipsum
              reiciendis provident saepe adipisci consectetur facilis sint,
              eligendi, sapiente culpa quam ab suscipit fugiat magnam tempore
              nam tenetur esse. Unde natus ipsa, voluptatem in id dolores
              laudantium animi? Alias praesentium suscipit illum eos, esse saepe
              accusantium ea quis, ipsa explicabo distinctio dolores molestias
              laudantium voluptate quos. Doloribus, alias accusamus. Sed maxime
              culpa, laborum expedita animi nobis repellat enim vero ullam eum
              perspiciatis officiis quisquam ipsam asperiores recusandae
              nesciunt similique amet voluptatibus commodi officia dolore!
              Praesentium exercitationem mollitia qui eum. Amet dolore dolor
              iusto commodi fugiat dolores dignissimos temporibus sequi ipsum,
              enim ad rem exercitationem officia, totam possimus! Earum
              doloremque harum quas similique laborum hic optio recusandae,
              alias cum facere. Fugiat id, animi explicabo quaerat cum nostrum
              nihil perspiciatis tempore expedita, distinctio magnam commodi
              facere? Sequi consectetur soluta esse molestias. Vel labore libero
              distinctio suscipit dolorem dicta ipsa omnis. Omnis? Et aliquam
              dolor ipsam, impedit, amet omnis aut illum, placeat perferendis
              ratione cumque ipsum dolorum expedita eligendi facere ullam
              quibusdam corrupti soluta suscipit. Ipsum earum ipsa voluptatum
              minima aliquam incidunt. Quo corporis, velit mollitia, expedita
              animi molestias quam libero itaque, esse magnam illo cumque
              placeat harum repellat eveniet neque? Porro doloremque quasi
              magnam quaerat officiis dolorum, est vitae iste voluptates!
              Perferendis placeat repudiandae facilis voluptatem blanditiis
              saepe voluptas optio quam tempora minima cupiditate sit, omnis,
              odit aperiam fugiat iure exercitationem vel, amet quod magnam
              dolor mollitia nobis. Mollitia, recusandae quo? Facilis, quo
              reiciendis consequuntur impedit, recusandae cupiditate unde
              quisquam harum maiores facere sit nisi? Itaque reprehenderit ea
              similique velit illum architecto neque vero saepe quisquam, iste,
              animi nemo atque ab. Laborum quos distinctio exercitationem! Saepe
              assumenda suscipit voluptate, ex perferendis provident harum
              deleniti, nemo architecto, recusandae mollitia distinctio enim
              repudiandae necessitatibus officiis impedit obcaecati minima minus
              culpa nostrum veritatis dolorem. Delectus rem odit commodi, ex
              eius aliquam distinctio repellat officia quia. Incidunt animi
              suscipit doloribus dolore nisi corporis deleniti tempore illum
              deserunt quidem harum molestias voluptas repudiandae similique,
              est praesentium. Architecto saepe reprehenderit ea ipsum ipsam
              ratione aliquid dolor ducimus, illum voluptates obcaecati deserunt
              nam, eaque accusantium dignissimos ab, temporibus iste assumenda
              autem nobis nemo. Aliquam quaerat porro repudiandae fuga!
              Reiciendis fuga non modi dolore architecto soluta. Non odio, id
              consectetur inventore cumque quo quidem consequatur ab veritatis
              dolorem quae sint nihil beatae aspernatur provident nemo nesciunt
              earum? Officiis, dicta. Reiciendis tempora harum recusandae hic,
              accusantium est nostrum vel pariatur id voluptatum unde repellat
              perferendis omnis eaque, repudiandae incidunt quibusdam libero
              alias eligendi animi eos doloribus quod. Magnam, voluptas quae.
              Ad, aperiam quia eaque quidem obcaecati perspiciatis reiciendis
              nam dolor? Minus aliquid earum odio iste excepturi quam.
              Consectetur, aperiam architecto? Est repellat totam quae atque
              ipsum nobis ullam at cumque! Minus, a. Vitae magnam velit
              explicabo autem ipsam vel accusantium sapiente hic doloremque
              repellendus temporibus voluptas dolor nihil debitis minus
              excepturi consequatur in exercitationem, id beatae laudantium
              consectetur? Eveniet, autem. Impedit voluptatum molestias facilis
              aliquam modi ullam et blanditiis suscipit illo? Aspernatur vel
              culpa qui, at aut, praesentium tempora ipsa dolorem soluta
              reprehenderit quia, dignissimos blanditiis aliquam ea a
              voluptatum. In esse dolor distinctio earum at deleniti, qui
              commodi laudantium! Voluptatum quia animi doloremque, fugiat sed
              sequi dolore! Iure, dolorem. Eligendi sequi natus quas quidem
              repudiandae quis aut modi numquam. Obcaecati sit perferendis
              facere, iste reprehenderit praesentium excepturi, non placeat
              ratione voluptate minus fugiat voluptatibus ab labore fuga
              consequuntur aut at saepe ut. Nam veniam sed reiciendis molestiae
              atque corporis. Vel perspiciatis doloremque sint, eaque et
              suscipit non culpa. Optio perspiciatis repellat et vel
              reprehenderit numquam fuga! Odit dolore deserunt porro cumque,
              fuga corrupti cupiditate, commodi, eligendi hic eos veritatis!
              Dolor eius, ad, dicta aut facere labore veritatis dignissimos
              delectus sint similique quis molestias, vel dolores! Beatae
              eligendi iste possimus quibusdam debitis vel pariatur excepturi
              similique sit, perspiciatis quidem iusto? Pariatur, labore sunt
              fuga vel voluptates expedita amet quas incidunt beatae! Nulla,
              neque accusantium? Magnam maiores rerum ut libero molestiae
              incidunt ipsum, quam ducimus officia asperiores. Sit sequi
              obcaecati assumenda? Aspernatur sed voluptate, officiis aliquid
              excepturi nihil quo ipsum? Quo aspernatur earum numquam adipisci
              laudantium, delectus possimus, iste recusandae facilis molestias
              ab exercitationem illum, deleniti quasi tempora odit ea! Dolor.
              Quam sint vero aperiam blanditiis excepturi quaerat dolorem,
              adipisci minus architecto et assumenda voluptas ducimus itaque
              aspernatur sed! Minima, aliquam aut officia ea id cupiditate
              laudantium tempora dolores consequatur autem.
            </div>
          </div>
          <div className={styles["item-contact"] + " d-flex flex-column"}>
            <div className={"mb-2"}>Свяжитесь с продавцом</div>
            <div className={styles["item-contact__input"] + " grid"}>
              <input type="text me-1 g-3" />
              <button className={" btn btn-primary g-1"}>Отправить</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
