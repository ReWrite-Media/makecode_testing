/**
 * Custom blocks
 */
namespace makecodeTest {
    /**
     * count to 20
     */
    //% block="count to 20"
    export function count_to_20(): void {
        for (let i = 0; i < 20; i++) {
            player.execute("say " + i);
        }
    }
    /**
     * say hi
     */
    //% block="say hi"
    export function say_hi(): void {
        player.execute("say hi");
    }
}